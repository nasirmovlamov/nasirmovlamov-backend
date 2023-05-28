"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const RoleGuard = (roles) => {
    class RoleGuardMixin {
        canActivate(context) {
            var _a, _b;
            const request = context.switchToHttp().getRequest();
            const token = (_b = (_a = request.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.replace('Bearer ', '');
            const jwt = token
                ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
                : null;
            const jwtDecoded = jwt;
            const rolesNames = roles.map((role) => role.name);
            return jwtDecoded.roles.some((role) => rolesNames.includes(role.name));
        }
    }
    return (0, common_1.mixin)(RoleGuardMixin);
};
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=roles.guard.js.map