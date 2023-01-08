import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(userName);

    if (user && user.passWord === pass) {
      const { passWord, ...result } = user;
      return result;
    }
    return null;
  }
}
