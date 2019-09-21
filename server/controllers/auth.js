import { jwtConfig, SECRET_KEY_AUTH } from '../config/config';
import jwt from 'jsonwebtoken';
import messages from '../utils/messages/auth';
import { serverErrorMessage } from '../utils/messages';

// const jwtBlacklist = require('jwt-blacklist')(jwt);

// jwtBlacklist.config({
//   unitType: 'h',
//   expiresDuration: 24,
// });

// blacklist.configure({
//   tokenId: 'jti',
// });

export const signIn = (app, passport) => (req, res, next) => {
  passport.authenticate('userLocal', {session: false}, (err, user, info) => {
    if(err || !user) {
      return res.status(400).json(messages.userNotExist(info));
    }

    if (!user.isActivate) return res.status(400).json(messages.deactivatedUser());
          
    req.login(user, {session: false}, (err) => {
      if (err) {
        return res.json(serverErrorMessage());
      }

      const token = jwt.sign({id: user['_id']}, app.get(SECRET_KEY_AUTH), jwtConfig);

      return res.json(messages.successLogIn(token));
    });
  })(req, res);
};

export const logout = (app) => (req, res) => {

  if (req.isAuthenticated()) {
   
    req.logout();
  
    return res.redirect('/api');
  }

  return res.status(401).json(messages.deactivatedUser());
};