import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findOne(1);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.findOne(userId);
  }
}
