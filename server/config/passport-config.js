import { Strategy as LocalStrategy } from 'passport-local';
import { findByUsernameOrEmail, findOneById } from '../models/query/user';

const localStrategy = new LocalStrategy(async (username, password, done) => {
  const criteria = (username.indexOf('@') === -1) ? { username: username } : { email: username };
  let user;
  try {
    user = await findByUsernameOrEmail(criteria);

    if (!user) {
      return done(null, false, {
        message: 'No user by that email or username'
      });
    }
  } catch (err) {
    return done(err);
  }

  let match = await user.checkPassword(password);
  if (!match) {
    return done(null, false, {
      message: 'Not a matching password'
    });
  }

  return done(null, user);

});

function ensureAuthenticated(req, res, next) {
  
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/api');
}

export const localPassportStrategy = (passport) => {
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    try {
      const doc = await findOneById(id);
      done(null, doc);
    } catch (error) {
      done(error);
    }
  });
  passport.use('userLocal', localStrategy);
  passport.authenticationMiddleware = ensureAuthenticated;
};

