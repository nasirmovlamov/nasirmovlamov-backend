import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch,
  Req,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { TaskService } from './task.service';
import { UsersService } from 'src/users/users.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TaskService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() request, @Body() createTaskDto: CreateTaskDto) {
    const user_id = request.user.userId;
    const user = await this.usersService.findOne(user_id);
    return this.tasksService.create({ ...createTaskDto, user });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  async getUserTasks(@Param('id') id: string) {
    const user = await this.usersService.findOne(Number(id));
    return this.tasksService.getUserTasks(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
