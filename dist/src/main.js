"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const user_entity_1 = require("./users/entities/user.entity");
const typeorm_1 = require("typeorm");
const permission_entity_1 = require("./permissions/entities/permission.entity");
const actions_static_1 = require("./static/actions.static");
const action_entity_1 = require("./actions/entities/action.entity");
const permissions_static_1 = require("./static/permissions.static");
const role_entity_1 = require("./roles/entities/role.entity");
const roles_static_1 = require("./static/roles.static");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    for (const action of actions_static_1.ActionsDefaultData) {
        const actionExists = await app
            .get(typeorm_1.DataSource)
            .getRepository(action_entity_1.Action)
            .save({ name: action });
    }
    const getActions = await app.get(typeorm_1.DataSource).getRepository(action_entity_1.Action).find();
    for (const permission in permissions_static_1.PermissionsDefaultData) {
        const permissionExists = await app
            .get(typeorm_1.DataSource)
            .getRepository(permission_entity_1.Permission)
            .save({ name: permission, actions: getActions });
    }
    const getPermissions = await app
        .get(typeorm_1.DataSource)
        .getRepository(permission_entity_1.Permission)
        .find();
    for (const role in roles_static_1.RolesDefaultData) {
        const roleExists = await app
            .get(typeorm_1.DataSource)
            .getRepository(role_entity_1.Role)
            .save({ name: role, permissions: getPermissions });
    }
    const getRoles = await app.get(typeorm_1.DataSource).getRepository(role_entity_1.Role).find();
    const userExists = await app.get(typeorm_1.DataSource).getRepository(user_entity_1.User).save({
        name: 'admin',
        email: 'nasirmovlamov@gmail.com',
        password: '123456',
        roles: getRoles,
    });
    await app.listen(9000);
}
bootstrap();
//# sourceMappingURL=main.js.map