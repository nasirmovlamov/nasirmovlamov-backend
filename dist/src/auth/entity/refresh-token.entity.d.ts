import { Permission } from 'src/permissions/entities/permission.entity';
import { Role } from 'src/roles/entities/role.entity';
declare class RefreshToken {
    constructor(init: Partial<RefreshToken>);
    id: number;
    userId: number;
    userAgent: string;
    ipaddress: string;
    roles: Role[];
    permissions: Permission[];
    sign(): string;
}
export default RefreshToken;
