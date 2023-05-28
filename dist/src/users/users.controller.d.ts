import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    me(request: any): Promise<import("./entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<Omit<import("./entities/user.entity").User, "password">>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    findOne(request: any): Promise<import("./entities/user.entity").User>;
    remove(request: any): Promise<{
        message: string;
    }>;
}
