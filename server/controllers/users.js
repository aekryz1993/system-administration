
import { allUsers } from '../models/query/user';
import messages, { successFetchUsers } from '../utils/messages/auth';

export const usersList = (app) => (req, res) => {
  const viewUsers = req.user.dataValues.permission.dataValues.viewUsers;
  const addUser = req.user.dataValues.permission.dataValues.createUser;
  const currentUserId = req.user.dataValues.id;

  (async () => {
    try {
      // isAuthenticated
      if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');

      if (!viewUsers) return res.status(400).json(messages.preventPermission());
      
      const allusers = await allUsers(app);
      
      const users = allusers.filter(user => user.dataValues.id.toString() !== currentUserId.toString());

      return res.json(successFetchUsers(users, addUser));

    } catch (err) {
      console.log(err);
    }
  })();
};