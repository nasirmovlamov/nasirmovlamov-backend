import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private usersRepository;
    private rolesService;
    constructor(usersRepository: Repository<User>, rolesService: RolesService);
    findAll(): Promise<User[]>;
    findByEmailAndGetPassword(email: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    findOne(id: number): Promise<User>;
    remove(id: string): Promise<boolean>;
    create(user: CreateUserDto): Promise<Omit<User, 'password'>>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<any>;
}
