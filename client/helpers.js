'use strict';

export const permissionsName = [
  {label: 'View users', name: 'viewUsers'},
  {label: 'Add users', name: 'createUser'},
  {label: 'Edit users', name: 'updateUser'},
  {label: 'Delete users', name: 'deleteUser'},
  {label: 'View groups', name: 'viewGroups'},
  {label: 'Add groups', name: 'createGroup'},
  {label: 'Edit groups', name: 'updateGroup'},
  {label: 'Delete groups', name: 'deleteGroup'},
  {label: 'Admin', name: 'isAdmin'},
];

export const userInfos = [
  {label: 'Username', name: 'username', type: 'text', placeholder:'Username'},
  {label: 'Email', name: 'email', type: 'text', placeholder:'Email'},
  {label: 'Password', name: 'password', type: 'password', placeholder:'Password'},
];