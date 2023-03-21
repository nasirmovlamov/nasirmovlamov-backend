import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'name', 'email'],
      relations: ['roles', 'roles.permissions'],
    });
  }

  async findByEmailAndGetPassword(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email', 'password'],
      relations: ['roles', 'roles.permissions'],
    });

    return {
      ...user,
      permissions: user.roles.map((item) => item.permissions).flat(),
    };
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'name', 'email'],
      relations: ['roles', 'roles.permissions'],
    });

    return {
      ...user,
      permissions: user.roles.map((item) => item.permissions).flat(),
    };
  }

  async findOne(id: number): Promise<User> {
    //get users with roles
    return await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email'],
      relations: ['roles', 'roles.permissions'],
    });
  }

  async remove(id: string): Promise<boolean> {
    const deletedUser = await this.usersRepository.delete(id);

    if (deletedUser.affected === 0) {
      throw new NotFoundException('User not found');
    }
    return true;
  }

  async create(user: {
    name: string;
    email: string;
    password: string;
  }): Promise<Omit<User, 'password'>> {
    const newUser = await this.usersRepository.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    //save user with relations (roles)
    await this.usersRepository.save(newUser);
    const userWithRoles = await this.usersRepository.findOne({
      where: { id: newUser.id },
      relations: ['roles', 'roles.permissions'],
    });

    return {
      id: userWithRoles.id,
      name: userWithRoles.name,
      email: userWithRoles.email,
      roles: userWithRoles.roles,
      permissions: userWithRoles.roles.map((item) => item.permissions).flat(),
    };
  }
}
