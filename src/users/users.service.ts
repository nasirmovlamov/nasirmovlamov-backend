import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'johndoe',
      email: 'johndoe@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'janedoe',
      email: 'janedoe@gmail.com',
      password: '123456',
    },
  ];

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  findOne(id: number): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
}
