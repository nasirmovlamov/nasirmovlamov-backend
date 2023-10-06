import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User]), UsersModule],
  controllers: [TasksController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TasksModule {}
