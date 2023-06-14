import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }

  @Get(':name')
  public findByName(@Param('name') name: string): User {
    return this.usersService.findByName(name);
  }

  @Post()
  public store(@Body() user: User): User {
    return this.usersService.store(user);
  }

}