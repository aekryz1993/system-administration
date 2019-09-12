import bcrypt from 'bcryptjs';
// import Sequelize from 'sequelize';
// import Permissions from './Permissions';
// import app from '../app';

export default (sequelize, Sequelize, Permissions) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Please enter your username'
        },
        len: {
          args: [4, 20],
          msg: 'Your username\'s length should be between 6 and 20'
        }
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        min: 4,
      }
    },
    isActivate: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  User.belongsTo(Permissions, {
    foreignKey: 'permissionsId'
  });

  User.addHook('beforeSave', async (user) => {
    try {

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      // eslint-disable-next-line require-atomic-updates
      user.password = hashedPassword;
      return;
    } catch (error) {
      return error;
    }
  });

  User.prototype.checkPassword = function (guess) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(guess, this.password, (err, isMatch) => {
        (err) ? reject(err) : resolve(isMatch);
      });
    });
  };

  return User;
};

// export default User;