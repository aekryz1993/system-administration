'use strict';

import { getErrorMessage } from '../helpers';

export const successRegistration = () => ({
  success: true,
  message: 'successful registration',
});

export const successUpdated = (userId) => ({
  success: true,
  userId: userId,
  message: 'successful updated',
});

export const fieldAlreadyExist = (field) => ({
  success: false,
  message: `the ${field} is already exist`,
  errors: {[field]: `the ${field} is already exist`},
});

export const userNotExist = (info) => ({
  success: false,
  message: info ? info.message : 'Login failed',
});

export const successLogIn = (isAuthenticated) => ({
  success: true,
  isAuth: isAuthenticated,
  message: 'successful login',
});

export const preventPermission = () => ({
  success: false,
  message: 'You don\'t have permission'
});

export const deactivatedUser = () => ({
  success: false,
  message: 'This user has been deactivated'
});

export const updatedFieldAlreadyExist = (error) => ({
  success: false,
  message: getErrorMessage(error)
});

export const successDeleted = () => ({
  success: true,
  message: 'successful removed',
});

export const successFetchUsers = (users, addUserPermission) => ({
  success: true,
  users: users,
  addUserPermission: addUserPermission,
  message: 'successful fetched users',
});

export default {
  successRegistration,
  successUpdated,
  fieldAlreadyExist,
  userNotExist,
  successLogIn,
  preventPermission,
  deactivatedUser,
  updatedFieldAlreadyExist,
  successDeleted
};