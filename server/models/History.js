import mongoose from 'mongoose';

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const historySchema = Schema({
  type: String,
  action: String,
  name: String,
}, { autoIndex: false });

export default mongoose.model('History', historySchema);