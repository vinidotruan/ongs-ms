import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  public store(user: User): User {
    this.users.push(user);
    return user;
  }

  public findByName(name: string): User {
    return this.users.find(user => user.name === name);
  }
}