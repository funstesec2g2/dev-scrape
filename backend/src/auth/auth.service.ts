import {Injectable} from "@nestjs/common";
import {AuthDto} from "./dto/auth.dto";
import * as argon from "argon2"
import {User} from "src/models/user-folder/user.schema";
import {JwtService} from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from 'mongoose';
import { Response, Request} from "express";
import { ForbiddenException, UnauthorizedException } from "@nestjs/common";
import { sendVerificationEmail, generateVerificationCode } from './email_service/email.service';

import { Res } from "@nestjs/common";



@Injectable()
class AuthService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService
    ){}

    async validateUser(email: string, pass: string): Promise<User> {
        const user: User = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new UnauthorizedException("the user doesn't exist");
        }
    
        const pwMatches = await argon.verify(user.password, pass);
    
        if (!pwMatches) {
            throw new ForbiddenException("You have Entered wrong password");
        }

        return user;
      }
    async findAll(): Promise<User[]>{
        return await this.userModel.find().exec();
    }

    async findOne(email: string){
        console.log(this.userModel)
        return this.userModel.findOne({email: email});
    }

    async findUserByResetCode(code: string){
        return this.userModel.findOne({passwordResetCode: code})
    }

    async updatePassword(email: string, newPassword: string){
        console.log(email)
        const user = await this.userModel.findOne({email: email});
        if (!user){
            throw new Error("user not found");
        }
        user.password = await argon.hash(newPassword);
        user.passwordResetCode = null;
        return user.save();
    }

    async createUser (createUserDto: AuthDto) : Promise<any>{
        const hash = await argon.hash(createUserDto.password);
        createUserDto.password = hash;
        const verificationCode = generateVerificationCode();

        console.log(verificationCode);
        createUserDto.emailToken = verificationCode;

        await sendVerificationEmail(createUserDto.email,  verificationCode).catch((err) => {
            console.log(err)
            throw new Error(err)
            ;});

        const user = await this.userModel.create(createUserDto);
        await user.save();
    
        console.log(user);
        return user;
       
    }

    async login(email: string, password: string, response: Response): Promise<{ message: string, access_token?:string, email?: string }> {

        try{
            const user: User = await this.userModel.findOne({ email: email });
            console.log(user);
            if (!user) {
                console.log('the user doesnt exist ')
                return {message: "no user found"};
            }
    
            const pwMatches = await argon.verify(user.password, password);
        
            if (!pwMatches) {
                return {message: "wrong password"};
            }
            if (user.isBlocked){
                return {message: 'user is blocked'}
            }
            if (!user.isVerified){
                const code = generateVerificationCode();
                user.emailToken = code;
                sendVerificationEmail(user.email, code);
                return {message: 'user is not verified'}
            }
           
            const payload = {
                sub: user.email,
                roles: user.roles,
                name: user.fullName,
      
              };
              console.log(user.fullName);
            const access_token: string = await this.jwtService.signAsync(payload);
            
        
            console.log(access_token);
        
            return {
                access_token,
                email,
                message: 'success'
            };
        }
        catch(e){
            console.log(e);
            return {message: "something went wrong"};
        }
        
    }

    async user(request: Request): Promise<any>{

        try{
            const cookie = request.cookies['user'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data){
                throw new UnauthorizedException();
            }

            const user = await this.userModel.findOne({email: data['email']});
            const {password, ...result} = user;
            return result;

        }
        catch(e){

            throw new UnauthorizedException("Bad Cookie error ");

        }

    }
    
    async update(body: AuthDto) {
        // this method will accept the authdto and try to update the 

        const vUser = await this.validateUser(body.email, body.password);

        if (vUser){
            
        }
        return Promise.resolve(undefined);
    }

    delete(body: AuthDto) {
        return Promise.resolve(undefined);
    }

    async logout(@Res({passthrough: true}) response: Response)  {

        response.clearCookie('user');

        return {
            message: "succses"
        }
        

    }
    async blockUser(email: string){
        const user = this.userModel.findOne({email: email});
        (await user).isBlocked = true;
        return (await user).save();
    }

    async findByVerificationCode(verificationCode: string){
        return this.userModel.findOne({ emailToken: verificationCode }).exec();
      }

      async getTotalUsers(): Promise<number> {
        const totalUsers = await this.userModel.countDocuments();
        console.log('this method is being called', totalUsers)
        return totalUsers;
      }
    
      async getTotalBlockedUsers(): Promise<number> {
        console.log('this method is being called', )
        const totalBlockedUsers = await this.userModel.countDocuments({
          isBlocked: true,
        });
        console.log('this method is being called', totalBlockedUsers)
        return totalBlockedUsers;
      }
      

    

  

}


export default AuthService;