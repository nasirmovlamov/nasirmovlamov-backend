// import { User } from 'src/users/entities/user.entity';
// import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
// import { Role } from '../entity/role.entity';
// import { Jwt } from 'jsonwebtoken';
// import { Request } from 'express';

// export const RoleGuard = (role: Role): Type<CanActivate> => {
//   class RoleGuardMixin implements CanActivate {
//     canActivate(context: ExecutionContext) {
//       //get jwt from request
//       const request = context.switchToHttp().getRequest<Request>();
//       const token = request.headers?.authorization?.replace('Bearer ', '');
//       const jwt = token
//         ? (JSON.parse(
//             Buffer.from(token.split('.')[1], 'base64').toString(),
//           ) as Jwt)
//         : null;
//       //get user from jwt
//       console.log(jwt);
//       const user = jwt as any as User;

//       //check if user has role
//       // if (user?.roles?.some((r) => r.id === role.id)) {
//       //   return true;
//       // }
//       // //check if user has permission
//       // else if (
//       //   user?.roles?.some((r) => r.permissions?.some((p) => p.id === role.id))
//       // ) {
//       //   return true;
//       // }
//       // //check if user has action
//       // else if (
//       //   user?.roles?.some((r) =>
//       //     r.permissions?.some((p) => p.actions?.some((a) => a.id === role.id)),
//       //   )
//       // ) {
//       //   return true;
//       // }

//       if (!token) {
//         return false;
//       }
//     }
//   }

//   return mixin(RoleGuardMixin);
// };
