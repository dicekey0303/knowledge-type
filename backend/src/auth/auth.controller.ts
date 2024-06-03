import { Controller, Body, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user//dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log('AuthController: login method called'); // 追加
    console.log('AuthController: user', req.user); // 追加
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    console.log('AuthController: register method called');
    console.log('AuthController: createUserDto', createUserDto);
    return this.authService.registerAndLogin(createUserDto);
  }
}
