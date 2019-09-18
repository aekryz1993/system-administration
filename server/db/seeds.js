import { savePermissions } from '../models/query/permissions';
import { saveUser, findByUsernameAndEmail } from '../models/query/user';

export default function runDev(app) {
  console.log('[----------- running the seeds --------------] ');

  (async () => {
    try {
      const lookupUser = await findByUsernameAndEmail(user.username, user.email, app)
      // console.log(lookupUser)
      if(Object.keys(lookupUser).length === 0) {
        const permissions = await savePermissions(initPermissions, app);
        await saveUser(user, permissions, app);
        console.log('user saved');
        return;
      } else {
        console.log('user already created')
        return;
      }
    } catch (err) {
      console.log(err);
    }
  })();
}

const user = {
  username: 'admin4',
  email: 'admin4@hotmail.com',
  password: 'admin',
  // isVerified: true,
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
}
