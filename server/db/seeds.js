import User from '../models/User';
import Permissions from '../models/Permissions';
import { savePermissions } from '../models/query/permissions';
import { saveUser } from '../models/query/user';

export default function renDev() {
  console.log('[----------- running the seeds --------------] ');
  let user = new User(users[0]);

  (async () => {
    try {
      await User.deleteMany({});
      await Permissions.deleteMany({});
      const permissions = await savePermissions(users[0].permissions);
      await saveUser(user, permissions);
      console.log('user saved');
    } catch (err) {
      console.log(e);
    }
  })();
}

const users = [{
  username: 'admin',
  email: 'admin@hotmail.com',
  password: 'admin',
  permissions: {
    viewUsers: true,
    createUser: true,
    updateUser: true,
    deleteUser: true,
    viewGroups: true,
    createGroup: true,
    updateGroup: true,
    deleteGroup: true,
    isAdmin: true
  },
  isVerified: true,
}];
