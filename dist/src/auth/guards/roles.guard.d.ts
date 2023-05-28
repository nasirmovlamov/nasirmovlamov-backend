import { CanActivate, Type } from '@nestjs/common';
export declare const RoleGuard: (roles: {
    name: string;
}[]) => Type<CanActivate>;
