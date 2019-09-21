'use strict';

import Permissions from '../Permissions';

export const savePermissions = (permissions) => {
    
  const newPermissions = (permissions instanceof Permissions) ? permissions : new Permissions(permissions);

  return newPermissions.save();
};

const findOneById = (permissionId) => {
  return Permissions.findById(permissionId).exec();
};

export default {
  savePermissions,
  findOneById,
};