import { Permission } from 'src/permissions/entities/permission.entity';
import { Role } from 'src/roles/entities/role.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    roles: Role[];
    permissions: Permission[];
}
