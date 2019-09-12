import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: [true, 'the name is already exist'],
  },

  permissions: { type: Schema.Types.ObjectId, ref: 'Permissions' },

});

export default mongoose.model('Group', groupSchema);