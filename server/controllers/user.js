/* eslint-disable require-atomic-updates */
// import { jwtConfig, SECRET_KEY_AUTH } from '../config/config';
// import jwt from 'jsonwebtoken';
import { findByUsernameAndEmail, saveUser, findOneById, UpdateUserQuery } from '../models/query/user';
// import { sendEmailVerificationLink } from '../mailer';
import messages from '../utils/messages/auth';
import { serverErrorMessage } from '../utils/messages';
import permissionsQuery from '../models/query/permissions';
import _ from 'lodash';

export const createUser = (app) => (req, res) => {

  const userBody = req.body;

  const createUser = req.user.dataValues.permission.dataValues.createUser;

  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');
      
      if (!createUser) return res.status(401).json(messages.preventPermission());
            
      let {user, field} = await findByUsernameAndEmail(userBody.username, userBody.email, app);

      if (user) return res.status(400).json(messages.fieldAlreadyExist(field));

      const userPermissions = await permissionsQuery.savePermissions(userBody.permissions, app);

      await saveUser(userBody, userPermissions, app);

      // const token = jwt.sign({ id: result.id }, app.get(SECRET_KEY_AUTH), jwtConfig);

      // process.nextTick(() => {
      // sendEmailVerificationLink(app, result, token);
      // })

      res.json(messages.successRegistration());

    } catch (err) {
      // res.status(400).json(messages.updatedFieldAlreadyExist(err));
      console.log(err);
      // res.status(500).json(serverErrorMessage());
    }
  })();

};

export const updateCurrentUser = (app) => (req, res) => {
  let user;
  let permissions;
  const updateData = req.body;
  const isAdmin = req.user.dataValues.permission.dataValues.isAdmin;
  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');

      if (!isAdmin) return res.status(400).json(messages.preventPermission());

      user = await findOneById(req.user.dataValues.id, app);
      permissions = await permissionsQuery.findOneById(req.user.dataValues.permission.dataValues.id, app);

      permissions = _.extend(permissions, updateData.permissions);
      user = _.extend(user, updateData);

      permissions = await permissionsQuery.UpdatePermissionsQuery(permissions, app);
      user = await UpdateUserQuery(user, permissions, app);

      res.json(messages.successUpdated());
    } catch (e) {
      res.status(400).json(messages.updatedFieldAlreadyExist(e));

      // res.status(500).json(serverErrorMessage());
    }
  })();
};

export const updateUser = (app) => (req, res) => {
  let user;
  let permissions;
  const updateData = req.body;
  const updateUser = req.user.dataValues.permission.dataValues.updateUser;
  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');
      
      if (!updateUser) return res.status(400).json(messages.preventPermission());

      user = await findOneById(req.profil.dataValues.id, app);
      permissions = await permissionsQuery.findOneById(req.profil.dataValues.permission.id, app);
      
      permissions = _.extend(permissions, updateData.permissions);
      user = _.extend(user, updateData);
      

      permissions = await permissionsQuery.UpdatePermissionsQuery(permissions, app);
      
      user = await UpdateUserQuery(user, permissions, app);

      res.json(messages.successUpdated(user.id));
    } catch (e) {
      console.log(e)
      res.status(400).json(messages.updatedFieldAlreadyExist(e));

      // res.status(500).json(serverErrorMessage());
    }
  })();
};

export const userParam = (app) => (req, res, next, id) => {
  let user;
  (async () => {
    try {
      // isAuthenticated
      // // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');

      user = await findOneById(id, app);

      // if (!user) return res.status(400).json(userNotExist(info));
            
      req.profil = user;
      next();
    } catch (e) {
      res.status(500).json(serverErrorMessage());
    }
  })();
};

export const removeUser = (req, res) => {
  let user = req.profil;
  const deleteUser = req.user.dataValues.permission.dataValues.deleteUser;
  (async () => {
    try {
      // isAuthenticated
      // if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');
      
      if (!deleteUser) return res.status(400).json(messages.preventPermission());
      user.destroy({
        where: {}
      });
      res.json(messages.successDeleted());
    } catch (e) {
      console.log(e)
      // res.status(500).json(serverErrorMessage());
    }
  })();
};

