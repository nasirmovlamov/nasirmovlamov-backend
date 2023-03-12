import { User } from 'src/users/entities/user.entity';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { Jwt } from 'jsonwebtoken';
import { Request } from 'express';
import { Permission } from 'src/permissions/entities/permission.entity';

export const PermissionGuard = (): Type<CanActivate> => {
  class PermissionGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      //get jwt from request
      const request = context.switchToHttp().getRequest<Request>();
      const token = request.headers?.authorization?.replace('Bearer ', '');
      const jwt = token
        ? (JSON.parse(
            Buffer.from(token.split('.')[1], 'base64').toString(),
          ) as Jwt)
        : null;
      //get user from jwt
      const user = jwt as any as User;
      console.log(user);

      //check if user has role
      // if (user?.roles?.some((r) => r.id === role.id)) {
      //   return true;
      // }
      // //check if user has permission
      // else if (
      //   user?.roles?.some((r) => r.permissions?.some((p) => p.id === role.id))
      // ) {
      //   return true;
      // }
      // //check if user has action
      // else if (
      //   user?.roles?.some((r) =>
      //     r.permissions?.some((p) => p.actions?.some((a) => a.id === role.id)),
      //   )
      // ) {
      //   return true;
      // }

      if (!token) {
        return false;
      }
    }
  }

  return mixin(PermissionGuardMixin);
};
