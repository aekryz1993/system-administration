import User from '../User';

export const saveUser = (user, permissions) => {

  const newUser = new User(user);

  newUser.permissions = permissions;

  return newUser.save();
};
///////////////////////
export const findByEmail = (email) => {
  return User.findOne({email}).populate('permissions').exec();
};
///////////////////////
export const findByUsername = (username) => {
  return User.findOne({username}).populate('permissions').exec();
};

export const findByUsernameAndEmail = (username, email) => {
  return new Promise((resolve, reject) => {
    let user;
    (async () => {
      try {
        user = await findByUsername(username);
        if(user) resolve({ user, field: 'username' });

        user = await findByEmail(email);
        if(user) resolve({ user, field: 'email' });

        resolve({});

      } catch (error) {
        reject(error);
      }
    })();
  });
};

export const findByUsernameOrEmail = (field) => {
  return new Promise((resolve, reject) => {
    let user;
    (async () => {
      try {
        if(field['username']) {
          user = await findByUsername(field.username);
          // console.log(user)
          resolve(user);
        } else if(field['email']) {
          user = await findByEmail(field.email);
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

export const findOneById = (userId) => {
  return User.findById(userId, '-password').populate('permissions').exec();
}; 

export const allUsers = async (page) => {
  var options = {
    select:   '_id username email isActivate',
    // sort:     { username: -1 },
    // lean:     true,
    // offset:   20, 
    limit:    5,
    page: page,
  };
  const users = await User.paginate({}, options);
  return users.docs;
};