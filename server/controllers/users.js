
import { allUsers } from '../models/query/user';
import messages, { successFetchUsers } from '../utils/messages/auth';

export const usersList = (req, res) => {
  const viewUsers = req.user.permissions.viewUsers;
  const addUser = req.user.permissions.createUser;
  const currentUserId = req.user._id;

  (async () => {
    try {
      // isAuthenticated
      if (!req.isAuthenticated()) return res.status(401).send('Doesn\'t authenticated');

      if (!viewUsers) return res.status(400).json(messages.preventPermission());
      
      const allusers = await allUsers(req.params.page);
      
      const users = allusers.filter(user => user._id.toString() !== currentUserId.toString());

      return res.json(successFetchUsers(users, addUser));

    } catch (err) {
      console.log(err);
    }
  })();
};