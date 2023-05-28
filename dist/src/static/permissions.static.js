"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsDefaultData = void 0;
const actions_static_1 = require("./actions.static");
exports.PermissionsDefaultData = {
    createAny: {
        name: 'createAny',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    readAny: {
        name: 'readAny',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    updateAny: {
        name: 'updateAny',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    deleteAny: {
        name: 'deleteAny',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    createOwn: {
        name: 'createOwn',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    readOwn: {
        name: 'readOwn',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    updateOwn: {
        name: 'updateOwn',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    deleteOwn: {
        name: 'deleteOwn',
        actions: [...actions_static_1.ActionsDefaultData],
    },
    createRole: {
        name: 'createRole',
        actions: [actions_static_1.ActionsDefaultObjectData.CREATE],
    },
    readRole: {
        name: 'readRole',
        actions: [actions_static_1.ActionsDefaultObjectData.READ],
    },
    updateRole: {
        name: 'updateRole',
        actions: [actions_static_1.ActionsDefaultObjectData.UPDATE],
    },
    deleteRole: {
        name: 'deleteRole',
        actions: [actions_static_1.ActionsDefaultObjectData.DELETE],
    },
    createPermission: {
        name: 'createPermission',
        actions: [actions_static_1.ActionsDefaultObjectData.CREATE],
    },
    readPermission: {
        name: 'readPermission',
        actions: [actions_static_1.ActionsDefaultObjectData.READ],
    },
    updatePermission: {
        name: 'updatePermission',
        actions: [actions_static_1.ActionsDefaultObjectData.UPDATE],
    },
    deletePermission: {
        name: 'deletePermission',
        actions: [actions_static_1.ActionsDefaultObjectData.DELETE],
    },
    createAction: {
        name: 'createAction',
        actions: [actions_static_1.ActionsDefaultObjectData.CREATE],
    },
    readAction: {
        name: 'readAction',
        actions: [actions_static_1.ActionsDefaultObjectData.READ],
    },
    updateAction: {
        name: 'updateAction',
        actions: [actions_static_1.ActionsDefaultObjectData.UPDATE],
    },
    deleteAction: {
        name: 'deleteAction',
        actions: [actions_static_1.ActionsDefaultObjectData.DELETE],
    },
    createUser: {
        name: 'createUser',
        actions: [actions_static_1.ActionsDefaultObjectData.CREATE],
    },
    readUser: {
        name: 'readUser',
        actions: [actions_static_1.ActionsDefaultObjectData.READ],
    },
    updateUser: {
        name: 'updateUser',
        actions: [actions_static_1.ActionsDefaultObjectData.UPDATE],
    },
    deleteUser: {
        name: 'deleteUser',
        actions: [actions_static_1.ActionsDefaultObjectData.DELETE],
    },
};
//# sourceMappingURL=permissions.static.js.map