import { Role } from 'src/roles/entities/role.entity';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    roles: Role[];
}
