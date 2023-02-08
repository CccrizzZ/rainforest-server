import { Injectable } from '@nestjs/common';
import User from './entities/users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      userName: 'chris',
      passWord: '2',
      email: 'chris@example.com',
    },
    {
      id: 2,
      userName: 'Owen',
      passWord: '1',
      email: 'owen@example.com',
    },
  ];

  // finding a single user by id
  async findById(id: number): Promise<User | undefined> {
    return this.users.find((user) => {
      user.id === id;
    });
  }

  // finding a single user by email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => {
      user.email === email;
    });
  }

  // create user

  // delete user

  // edit user
}
