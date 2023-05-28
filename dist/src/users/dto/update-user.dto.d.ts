import { CreateUserDto } from './create-user.dto';
import { Role } from 'src/roles/entities/role.entity';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    name: string;
    email: string;
    roles: Role[];
}
export {};
