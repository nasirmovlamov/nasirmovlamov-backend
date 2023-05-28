"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const PermissionGuard = (guardPermissions) => {
    class PermissionGuardMixin {
        canActivate(context) {
            var _a, _b;
            const request = context.switchToHttp().getRequest();
            const token = (_b = (_a = request.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.replace('Bearer ', '');
            const decodedJwt = (0, jsonwebtoken_1.verify)(token, process.env.ACCESS_SECRET);
            const userPermissions = decodedJwt.permissions;
            const userPermissionsNames = userPermissions.map((permission) => permission.name);
            const hasPermission = guardPermissions.every((permission) => userPermissionsNames.includes(permission.name));
            return hasPermission;
        }
    }
    return (0, common_1.mixin)(PermissionGuardMixin);
};
exports.PermissionGuard = PermissionGuard;
//# sourceMappingURL=permission.guard.js.map