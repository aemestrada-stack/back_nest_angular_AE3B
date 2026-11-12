import { Body,Controller,Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { AuthService } from './auth.service.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){

    }
    @Post('register')
    registerUser(@Body()userObj : RegisterAuthDto){
        console.log(userObj);
        return userObj;

        userObj.email
        userObj.name
        userObj.password
    }

    @Post('Login')
    Login(@Body() credenciales:LoginAuthDto){
        return this.authService.login(credenciales)
    }
    
    }