import { Controller, Post, Body, Req, ParseIntPipe,Param, NotFoundException,  UseGuards, Get } from "@nestjs/common";
import { HttpException, HttpStatus } from "@nestjs/common";
import  AuthService from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UserService } from "src/models/user-folder/user.service";
import e, { Response } from "express";
import { Res } from "@nestjs/common";
import { Error, MongooseError } from "mongoose";
import { AdminAuthorizationGuard } from "./admin_authorization/admin.authorization.guard";
import { AuthGuard } from "./auth_guards/auth.guard";
import { sendVerificationEmail } from "./email_service/email.service";
import { sendForgotPasswordEmail } from "./email_service/email.service";
import { generateVerificationCode } from "./email_service/email.service";
import { InternalServerErrorException } from "@nestjs/common";
import * as argon from "argon2"
import { User } from "src/models/user-folder/user.schema";

@Controller('auth')
class AuthController{
    constructor(private authService: AuthService){  

    }
    @Post('register')
  async register( @Body() body: AuthDto): Promise<any> {
    const oldUser = await this.authService.findOne(body.email);
    console.log(body.email, 'this isthe email')
    console.log(oldUser);

    if(oldUser){
        if (oldUser.isBlocked){
          return {message: "User is blocked"}
        }
        return {message: "User already exists"}
    }
    
    const user =  await this.authService.createUser(body);
    return user;

  }

    @Post('login')
    async login(@Body() body: any ){

        return this.authService.login(body.email, body.password);
        
    }
    @Post('verify')
    async verifyUser(@Body() body: { verificationCode: string }): Promise<string> {
      console.log('this method is being called')
      const { verificationCode } = body;
    
      const user = await this.authService.findByVerificationCode(verificationCode.trim());
      console.log(user);
    
      if (!user) {
        throw new NotFoundException('User not found or already verified.');
      }
    
      user.isVerified = true;
      await user.save();
      console.log(user);
    
      return 'User verified successfully. You can now log in.';
    }
    
    @Post('reset-password')
    async forgotPassword(@Body('email') email: string): Promise<{ message: string }> {
      try {
        const user = await this.authService.findOne(email);

        const resetCode =  generateVerificationCode();
        user.passwordResetCode = resetCode;
        await user.save();
        console.log(user);
      await sendForgotPasswordEmail(email, resetCode);

        return { message: 'Password reset email sent successfully.' };
      } catch (error) {
        console.error('Error sending email:', error);
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    @Post('verify-resetcode')
    async verifyResetCode(@Body('verificationCode') verificationCode: string): Promise<{ message: string }> {
      try {
        console.log('this method is being called')
        const user = await this.authService.findUserByResetCode(verificationCode.trim());
  
        if (!user || user.isBlocked) {
          throw new HttpException('Invalid reset code', HttpStatus.BAD_REQUEST);
        }
        return { message: 'Reset code verified successfully.' };
      } catch (error) {
        console.error('Error during reset code verification:', error);
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }

    }

    @Post('reset-password-newpassword')
    async resetPasswordNewPassword(@Body() body: { email: string; password: string }): Promise<{ message: string }> {
      const { email, password } = body;
      console.log("this is the password", password);
  
      try {
        await this.authService.updatePassword(email, password);
      } catch (error) {
        console.error('Error resetting password:', error);
        throw new InternalServerErrorException('Internal server error');
      }

      return { message: 'Password reset successfully.' };
    }


    @Post('block-user')
    @UseGuards(AdminAuthorizationGuard)
    @UseGuards(AuthGuard)
    async blockUser(@Body('email') email: string){
       await this.authService.blockUser(email).then(res =>{
            return {message: 'User blocked successfully'}

       }).catch(err =>{
            return {message: 'User not found'}

       }).finally(() =>{
        return {message: 'Error in blocking the user '}
       });
      
       
    }

  @Get('total-users')
  @UseGuards(AdminAuthorizationGuard)
  @UseGuards(AuthGuard)
  async getTotalUsers() {
    const totalUsers = await this.authService.getTotalUsers();
    return { totalUsers };
  }

  
  @Get('total-blocked-users')
  @UseGuards(AdminAuthorizationGuard)
  @UseGuards(AuthGuard)
  async getTotalBlockedUsers() {
    const totalBlockedUsers = await this.authService.getTotalBlockedUsers();
    return { totalBlockedUsers };
  }


  @Post('change-name')
  @UseGuards(AuthGuard) 
  async changeUserName(@Body() body: { email: string; password: string; newName: string }): Promise<{ message: string }> {
    
    const { email, password, newName } = body;
    console.log(email, 'the email')
    console.log(email, password, newName);
  
  

    const user = this.authService.findOne(email);
    console.log(user);

    if (!user){
      return {message: 'No user found'}
    }
    const pwMatches = await argon.verify((await user).password, password);
    console.log(pwMatches);
    if (!pwMatches){
    return {message: 'Wrong password'} }
    
    (await user).fullName = newName;
    (await user).save();
    return this.authService.login((await user).email, password.trim());
}


    

}

export default AuthController;