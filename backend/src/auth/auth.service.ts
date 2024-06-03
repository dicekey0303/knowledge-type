import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user//dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    console.log('AuthService: validateUser method called'); // 追加
    console.log('AuthService: username', username); // 追加
    console.log('AuthService: password', password); // 追加
    const user = await this.userService.findOne(username);
    console.log('AuthService: user', user); // 追加
    if (user && user.password === password) {
      const { password: _, ...result } = user;
      return result;
    }
    console.log('AuthService: invalid credentials');
    return null;
  }

  async login(user: any) {
    console.log('AuthService: login method called'); // 追加
    console.log('AuthService: user', user); // 追加
    const payload = { username: user.username, sub: user.userId };
    console.log('AuthService: payload', payload); // 追加
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerAndLogin(createUserDto: CreateUserDto) {
    console.log('AuthService: registerAndLogin method called');
    console.log('AuthService: createUserDto', createUserDto);
    const user = await this.userService.create(createUserDto);
    console.log('AuthService: user created', user);
    return this.login(user);
  }
}
