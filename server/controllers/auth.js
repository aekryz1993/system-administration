import messages from '../utils/messages/auth';
import { serverErrorMessage } from '../utils/messages';

import redis from 'redis';
const redisClient = redis.createClient();

export const signIn = (app, passport) => (req, res) => {
  passport.authenticate('userLocal', (err, user, info) => {
    if(err || !user) {
      return res.status(400).json(messages.userNotExist(info));
    }

    if (!user.isActivate) return res.status(400).json(messages.deactivatedUser());
          
    req.login(user, (err) => {
      if (err) {
        return res.json(serverErrorMessage());
      }
      const isAuthenticated = req.isAuthenticated();
      // res.cookie('auth', isAuthenticated);
      return res.json(messages.successLogIn(isAuthenticated));
    });
  })(req, res);
};

export const logout = (app) => (req, res) => {
  
  
  // console.log(req.sessionID);
  redisClient.del(`sess:${req.sessionID}`);
  return req.session.destroy(err => {
    if(err){
      console.log(err);
    } else {
      // console.log(res.sessionID)
      // redisClient.del(`sess:${req.sessionID}`);
      req.logout();
      return res.send('logged out');
    }
  });
};