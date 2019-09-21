import User from '../models/User';
import Permissions from '../models/Permissions';
import { savePermissions } from '../models/query/permissions';
import { saveUser, findByUsernameAndEmail } from '../models/query/user';

export default function runDev(uri, uriDev) {
  console.log('[----------- running the seeds --------------] ');
  let user = new User(initUser);
  const isDev = (uri === uriDev);

  if (isDev) {
    (async () => {
      try {
        await User.deleteMany({});
        await Permissions.deleteMany({});
        const permissions = await savePermissions(initPermissions);
        await saveUser(user, permissions);
        console.log('user saved');
      } catch (err) {
        console.log(err);
      }
    })();
  } else {
    (async () => {
      try {
        const lookupUser = await findByUsernameAndEmail(user.username, user.email);

        if(Object.keys(lookupUser).length === 0) {
          const permissions = await savePermissions(initPermissions);
          await saveUser(user, permissions);
          console.log('user saved');
        } else {
          console.log('user already created');
        }
      } catch(err) {
        console.log(err);
      }
    })();
  }
}

const initUser = {
  username: 'admin',
  email: 'admin@hotmail.com',
  password: 'admin'
};

const initPermissions = {
  viewUsers: true,
  createUser: true,
  updateUser: true,
  deleteUser: true,
  viewGroups: true,
  createGroup: true,
  updateGroup: true,
  deleteGroup: true,
  isAdmin: true
};