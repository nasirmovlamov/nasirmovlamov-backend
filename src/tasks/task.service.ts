import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = await this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOne({
      where: { id },
    });
  }

  async getUserTasks(user: User): Promise<Task[]> {
    return await this.taskRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
    });
  }

  async update(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<UpdateResult> {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
