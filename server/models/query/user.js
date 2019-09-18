// import User from '../User';
// import Permissions from '../Permissions';
import connect, {config} from '../../db/connection';

export const saveUser = (user, permissions, app) => {

  const newUser = (user instanceof connect(config(app)).user) ? user : connect(config(app)).user.build(user);

  newUser.dataValues.permissionsId = permissions.id;

  newUser.save();

  return newUser.dataValues;
};

//////////////////////
export const UpdateUserQuery = (user, permissions, app) => {

  user.permissionsId = permissions.id;

  user.save();

  return user.dataValues;
};

///////////////////////
export const findByEmail = (email, app) => {
  return connect(config(app)).user.findOne({
    where: {
      email: email
    },
    include: [{
      model: connect(config(app)).permissions,
    }],
  });
};
///////////////////////
export const findByUsername = (username, app) => {
  return connect(config(app)).user.findOne({
    where: {
      username: username
    },
    include: [{
      model: connect(config(app)).permissions,
    }],
  });
};

export const findByUsernameAndEmail = (username, email, app) => {
  return new Promise((resolve, reject) => {
    let user;
    (async () => {
      try {
        user = await findByUsername(username, app);
        if (user) resolve({
          user,
          field: 'username'
        });

        // eslint-disable-next-line require-atomic-updates
        user = await findByEmail(email, app);
        if (user) resolve({
          user,
          field: 'email'
        });

        resolve({});

      } catch (error) {
        reject(error);
      }
    })();
  });
};

export const findByUsernameOrEmail = (field, app) => {
  return new Promise((resolve, reject) => {
    let user;
    (async () => {
      try {
        if (field['username']) {
          user = await findByUsername(field.username, app);
          // console.log(user)
          resolve(user);
        } else if (field['email']) {
          user = await findByEmail(field.email, app);
          resolve(user);
        } else {
          resolve(null);
        }

      } catch (error) {
        reject(error);
      }
    })();
  });
};

export const findOneById = (userId, app) => {
  return connect(config(app)).user.findOne({
    where: {
      id: userId
    },
    include: [{
      model: connect(config(app)).permissions,
    }],
    attributes: {
      exclude: ['password']
    },
  });
};

export const allUsers = (app) => {
  return connect(config(app)).user.findAll({
    attributes: ['id', 'username', 'email', 'isActivate'],
  });
};