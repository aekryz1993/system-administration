import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const permissionsSchema = Schema({

  viewUsers: { type: Boolean, 'default': false },

  createUser: { type: Boolean, 'default': false },

  updateUser: { type: Boolean, 'default': false },

  deleteUser: { type: Boolean, 'default': false },

  viewGroups: { type: Boolean, 'default': false },

  createGroup: { type: Boolean, 'default': false },

  updateGroup: { type: Boolean, 'default': false },

  deleteGroup: { type: Boolean, 'default': false },

  isAdmin: { type: Boolean, 'default': false },
    
}, { autoIndex: false });

export default mongoose.model('Permissions', permissionsSchema);