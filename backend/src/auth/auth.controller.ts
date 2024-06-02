import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

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
}
