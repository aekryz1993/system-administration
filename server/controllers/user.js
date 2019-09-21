import { findByUsernameAndEmail, saveUser, findOneById } from '../models/query/user';
import messages from '../utils/messages/auth';
import { serverErrorMessage } from '../utils/messages';
import permissionsQuery from '../models/query/permissions';
import _ from 'lodash';

export const createUser = (app) => (req, res) => {

  const userBody = req.body;

  const createUser = req.user.permissions.createUser;

  (async () => {
    try {
      
      if (!createUser) return res.status(401).json(messages.preventPermission());
            
      let {user, field} = await findByUsernameAndEmail(userBody.username, userBody.email);

      if (user) return res.status(400).json(messages.fieldAlreadyExist(field));

      const userPermissions = await permissionsQuery.savePermissions(userBody.permissions);

      await saveUser(userBody, userPermissions);

      res.json(messages.successRegistration());

    } catch (err) {
      // res.status(400).json(messages.updatedFieldAlreadyExist(err));
      console.log(err);
      // res.status(500).json(serverErrorMessage());
    }
  })();

};

export const updateCurrentUser = (req, res) => {
  let user;
  let permissions;
  const updateData = req.body;
  const isAdmin = req.user.permissions.isAdmin;
  (async () => {
    try {

      if (!isAdmin) return res.status(400).json(messages.preventPermission());

      user = await findOneById(req.user._id);
      permissions = await permissionsQuery.findOneById(req.user.permissions._id);

      permissions = _.extend(permissions, updateData.permissions);
      user = _.extend(user, updateData);

      permissions = await permissionsQuery.savePermissions(permissions);
      user = await saveUser(user, permissions);

      res.json(messages.successUpdated());
    } catch (e) {
      res.status(400).json(messages.updatedFieldAlreadyExist(e));

      // res.status(500).json(serverErrorMessage());
    }
  })();
};

export const updateUser = (req, res) => {
  let user;
  let permissions;
  const updateData = req.body;
  const updateUser = req.user.permissions.updateUser;
  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');
      
      if (!updateUser) return res.status(400).json(messages.preventPermission());

      user = await findOneById(req.profil._id);
      permissions = await permissionsQuery.findOneById(req.profil.permissions._id);
      
      permissions = _.extend(permissions, updateData.permissions);
      user = _.extend(user, updateData);
      

      permissions = await permissionsQuery.savePermissions(permissions);
      
      user = await saveUser(user, permissions);

      res.json(messages.successUpdated(user._id));
    } catch (e) {
      console.log(e);
      res.status(400).json(messages.updatedFieldAlreadyExist(e));

      res.status(500).json(serverErrorMessage());
    }
  })();
};

export const userParam = (req, res, next, id) => {
  let user;
  (async () => {
    try {
     
      user = await findOneById(id);
  
      req.profil = user;
      next();
    } catch (e) {
      res.status(500).json(serverErrorMessage());
    }
  })();
};

export const removeUser = (req, res) => {
  let user = req.profil;
  const deleteUser = req.user.permissions.deleteUser;
  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');
      
      if (!deleteUser) return res.status(400).json(messages.preventPermission());
      user.remove();
      res.json(messages.successDeleted());
    } catch (e) {
      console.log(e);
      // res.status(500).json(serverErrorMessage());
    }
  })();
};

