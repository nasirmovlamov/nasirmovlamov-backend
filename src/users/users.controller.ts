import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Req,
  UseGuards,
} from '@nestjs/common';
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
    const id = request.params.id;
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @UseGuards(PermissionGuard([PermissionsDefaultData.deleteUser]))
  @Delete(':id')
  async remove(@Req() request) {
    const id = request.params.id;
    console.log(id);
    if (id == 1) {
      throw new NotFoundException('Admin can not be deleted');
    }
    const removedUser = await this.usersService.remove(id);
    if (removedUser) {
      return {
        message: 'User removed',
      };
    }
    return undefined;
  }
}
