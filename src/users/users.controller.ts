import { Controller, Delete, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { PermissionsDefaultData } from 'src/static/permissions.static';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.findOne(userId);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(PermissionGuard())
  @Delete(':id')
  async remove(@Req() request) {
    const userId = request.user.userId;
    return this.usersService.remove(userId);
  }
}
