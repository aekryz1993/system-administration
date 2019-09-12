import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { findByUsernameOrEmail, findOneById } from '../models/query/user';
import { SECRET_KEY_AUTH_VALUE } from './config';

const localStrategy = (app) => new LocalStrategy(async (username, password, done) => {
  const criteria = (username.indexOf('@') === -1) ? { username: username } : { email: username };
  let user;
  try {
    user = await findByUsernameOrEmail(criteria, app);
    // console.log(user.dataValues);
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

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY_AUTH_VALUE
};

const jwtStrategy = (app) => new JwtStrategy(options, async (jwtPayload, done) => {
  let user; 
  try {
    user = await findOneById(jwtPayload.id, app);
    if (!user) return done(null, false, {
      message: 'No user by that email or username'
    });

    return done(null, user);
  } catch (err) {
    done(err);
  }
});

export const localPassportStrategy = (passport, app) => passport.use('userLocal', localStrategy(app));

export const jwtPassportStrategy = (passport, app) => passport.use('userJwt', jwtStrategy(app));


