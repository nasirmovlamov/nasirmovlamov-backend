import { Permission } from 'src/permissions/entities/permission.entity';
export declare class Role {
    id: number;
    name: string;
    permissions: Permission[];
}
