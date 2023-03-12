import { ActionsDefaultData } from './actions.static';

export type PermissionsDefaultType = typeof PermissionsDefaultData;

export const PermissionsDefaultData = {
  createAny: {
    name: 'createAny',
    actions: [...ActionsDefaultData],
  },
  readAny: {
    name: 'readAny',
    actions: [...ActionsDefaultData],
  },
  updateAny: {
    name: 'updateAny',
    actions: [...ActionsDefaultData],
  },
  deleteAny: {
    name: 'deleteAny',
    actions: [...ActionsDefaultData],
  },
  createOwn: {
    name: 'createOwn',
    actions: [...ActionsDefaultData],
  },
  readOwn: {
    name: 'readOwn',
    actions: [...ActionsDefaultData],
  },
  updateOwn: {
    name: 'updateOwn',
    actions: [...ActionsDefaultData],
  },
  deleteOwn: {
    name: 'deleteOwn',
    actions: [...ActionsDefaultData],
  },
  createRole: {
    name: 'createRole',
    actions: [...ActionsDefaultData],
  },
  readRole: {
    name: 'readRole',
    actions: [...ActionsDefaultData],
  },
  updateRole: {
    name: 'updateRole',
    actions: [...ActionsDefaultData],
  },
  deleteRole: {
    name: 'deleteRole',
    actions: [...ActionsDefaultData],
  },
  createPermission: {
    name: 'createPermission',
    actions: [...ActionsDefaultData],
  },
  readPermission: {
    name: 'readPermission',
    actions: [...ActionsDefaultData],
  },
  updatePermission: {
    name: 'updatePermission',
    actions: [...ActionsDefaultData],
  },
  deletePermission: {
    name: 'deletePermission',
    actions: [...ActionsDefaultData],
  },
  createAction: {
    name: 'createAction',
    actions: [...ActionsDefaultData],
  },
  readAction: {
    name: 'readAction',
    actions: [...ActionsDefaultData],
  },
  updateAction: {
    name: 'updateAction',
    actions: [...ActionsDefaultData],
  },
  deleteAction: {
    name: 'deleteAction',
    actions: [...ActionsDefaultData],
  },
  createUser: {
    name: 'createUser',
    actions: [...ActionsDefaultData],
  },
  readUser: {
    name: 'readUser',
    actions: [...ActionsDefaultData],
  },
  updateUser: {
    name: 'updateUser',
    actions: [...ActionsDefaultData],
  },
  deleteUser: {
    name: 'deleteUser',
    actions: [...ActionsDefaultData],
  },
};
