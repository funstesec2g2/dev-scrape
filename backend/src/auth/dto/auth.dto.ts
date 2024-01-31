import { IS_LENGTH, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class AuthDto{


    @IsNotEmpty()
    password: string;

    @IsOptional()
    roles?: string;

    @IsNotEmpty()
    fullName: string;

    // @IsNotEmpty()
    // lastName: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    profilePicture?: string;

    @IsOptional()
    isVerified?: boolean;

    @IsOptional()
    emailToken?: string

    

    
}


