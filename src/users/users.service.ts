import { Injectable } from '@nestjs/common';
export interface User {
  userId: number;
  userName: string;
  passWord: string;
}

@Injectable()
export class UsersService {
  // need to implement salted password
  // sha 256 or bcrypt
  private readonly users: User[] = [
    {
      userId: 1,
      userName: 'chris',
      passWord: '2',
    },
  ];

  async findUser(userName: string): Promise<User | undefined> {
    return this.users.find((user) => {
      user.userName === userName;
    });
  }
}
