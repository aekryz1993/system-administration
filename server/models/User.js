import mongoose from 'mongoose'; 
// import mongooseRedisCache from 'mongoose-redis-cache';
import bcrypt from 'bcryptjs';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: [true, 'the username is already exist'],
    minlength: [5, 'Your username is too short']
  }, 

  email: {
    type: String,
    required: true,
    index: true,
    unique: [true, 'the email is already exist'],
    match: [/\S+@\S+\.\S+/, 'email is invalid']
  },

  password: { type: String, minlength: [5, 'Your password is too short'] },

  // groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

  permissions: { type: Schema.Types.ObjectId, ref: 'Permissions' },

  firstname: String,

  lastname: String,

  // salt: { type: Number, default: 12 },

  createdAt: { type: Date, default: Date.now() },

  lastLogin: Date,

  isActivate: { type: Boolean, 'default': true },

  isVerified: { type: Boolean, 'default': false },
    
});

userSchema.plugin(mongoosePaginate);

// userSchema.set('redisCache', true);

// userSchema.set('expires', 0);

// mongooseRedisCache(mongoose);

userSchema.pre('save', async function(done) {
  try {
    const user = this;

    if (!user.isModified('password')) return done();

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;

    done();
  } catch(err) {
    return done(err);  
  }
});

userSchema.methods.checkPassword = function(guess) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
      (err) ? reject(err) : resolve(isMatch);
    });
  });
};

export default mongoose.model('User', userSchema);
