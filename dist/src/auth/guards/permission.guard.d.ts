import { CanActivate, Type } from '@nestjs/common';
import { PermissionType } from 'src/static/permissions.static';
export declare const PermissionGuard: (guardPermissions: PermissionType[]) => Type<CanActivate>;
