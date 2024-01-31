import { Controller, Post, Body, Req, ParseIntPipe,Param, NotFoundException,  UseGuards, Get } from "@nestjs/common";
import { HttpException, HttpStatus } from "@nestjs/common";
import  AuthService from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { UserService } from "src/models/user-folder/user.service";
import { Response } from "express";
import { Res } from "@nestjs/common";
import { Error, MongooseError } from "mongoose";
import { AdminAuthorizationGuard } from "./admin_authorization/admin.authorization.guard";
import { AuthGuard } from "./auth_guards/auth.guard";
import { sendVerificationEmail } from "./email_service/email.service";
import { sendForgotPasswordEmail } from "./email_service/email.service";


@Controller('auth')
class AuthController{
    constructor(private authService: AuthService){  

    }
    @Post('register')
  async register( @Body() body: AuthDto): Promise<any> {
    const oldUser = await this.authService.findOne(body.email);

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
    async login(@Body() body: any,@Res({passthrough:true}) response: Response ){

        return this.authService.login(body.email, body.password, response);
        
    }
    @Post('verify')
    async verifyUser(@Body() body: { verificationCode: string }): Promise<string> {
      const { verificationCode } = body;
    
      const user = await this.authService.findByVerificationCode(verificationCode);
    
      if (!user) {
        throw new NotFoundException('User not found or already verified.');
      }
    
      user.isVerified = true;
      await user.save();
    
      return 'User verified successfully. You can now log in.';
    }
    
    @Post('forgot-password')
    async forgotPassword(@Body('email') email: string): Promise<{ message: string }> {
      try {
        const user = await this.authService.findOne(email);

        const password = user.password;
  
       
      await sendForgotPasswordEmail(email, password);
  
        return { message: 'Password reset email sent successfully.' };
      } catch (error) {
        console.error('Error sending email:', error);
        throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }




    @Get('block-user')
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


    

}


export default AuthController;