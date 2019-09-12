// 'use strict';

// import Permissions from '../Permissions';
import connect, {config} from '../../db/connection';

export const savePermissions = (permissions, app) => {

  let newPermissions = (permissions instanceof connect(config(app)).permissions) ? permissions : connect(config(app)).permissions.build(permissions);
 
  newPermissions.save();
  return newPermissions.dataValues;
};

////////////////////////////////
export const UpdatePermissionsQuery = (permissions, app) => {

  permissions.save();

  return permissions.dataValues;
};

////////////////////////////////
const findOneById = (permissionId, app) => {
  return connect(config(app)).permissions.findByPk(permissionId);
};

export default {
  savePermissions,
  UpdatePermissionsQuery,
  findOneById,
};