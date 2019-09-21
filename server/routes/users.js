import express from 'express';
import { usersList } from '../controllers/users';
import { createUser, updateUser, userParam, removeUser } from '../controllers/user';
import messages from '../utils/messages/auth';

const router = express.Router();

const usersRouter = (app) => {

  router.route('/')
    .get(usersList);

  router.route('/add')
    .post(createUser(app));

  router.route('/:userId')
    .get((req, res) => {
      const viewUsers = req.user.permissions.viewUsers;
      const updateUser = req.user.permissions.updateUser;
      const deleteUser = req.user.permissions.deleteUser;
      if (!viewUsers) return res.status(400).json(messages.preventPermission());
      const result = {
        user: req.profil,
        updateUser: updateUser,
        deleteUser: deleteUser
      };
      res.json(result);
    })
    .put(updateUser)
    .delete(removeUser);

  router.param('userId', userParam);

  return router;

};

export default usersRouter;