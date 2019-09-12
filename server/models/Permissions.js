	module.exports = (sequelize, Sequelize) => {
  const Permissions = sequelize.define('permissions', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },

    viewUsers: { type: Sequelize.BOOLEAN, defaultValue: false },

    createUser: { type: Sequelize.BOOLEAN, defaultValue: false },

    updateUser: { type: Sequelize.BOOLEAN, defaultValue: false },

    deleteUser: { type: Sequelize.BOOLEAN, defaultValue: false },

    viewGroups: { type: Sequelize.BOOLEAN, defaultValue: false },

    createGroup: { type: Sequelize.BOOLEAN, defaultValue: false },

    updateGroup: { type: Sequelize.BOOLEAN, defaultValue: false },

    deleteGroup: { type: Sequelize.BOOLEAN, defaultValue: false },

    isAdmin: { type: Sequelize.BOOLEAN, defaultValue: false },
  }, { createdAt: false, updatedAt: false });

  return Permissions;
};