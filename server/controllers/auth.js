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

    if (!user.dataValues.isActivate) return res.status(400).json(messages.deactivatedUser());
          
    req.login(user, {session: false}, (err) => {
      if (err) {
        res.json(serverErrorMessage());
      }

      const token = jwt.sign({id: user.dataValues.id}, app.get(SECRET_KEY_AUTH), jwtConfig);

      return res.json(messages.successLogIn(user.dataValues, token));
    });
  })(req, res);
};

export const logout = (app) => (req, res) => {

  // const token = req.headers.authorization.split(' ')[1];

  // if(!decoded.exp) return res.status(400).send('doesn\'t autherization');

  if (req.isAuthenticated()) {

    // jwtBlacklist.blacklist(token);
   
    req.logout();
  
    return res.redirect('/api');
  }

  return res.status(401).json(messages.deactivatedUser());
};

//////////////////////////////////////////////////////////////////////////////////

// export const signin = (app) => (req, res) => {
//   const { username, password} = req.body;
//   // let user;
//   (async () => {
//     const user = await findByUsername(username);

//     // const email = await findByEmail(username);

//     // if(!(email && user)) return res.status(400).userNotExist();

//     // if (psudo) user = psudo;
//     // if(email) user = email;

//     if (!user.checkPassword(password)) return res.status(400).res.send('password doen\'t match');

//     const token = jwt.sign({
//       _id: user._id
//     }, app.get(SECRET_KEY_AUTH), jwtConfig);

//     const decoded = jwt.decode(token, {complete: true});

//     console.log(decoded.header);
//     console.log(decoded.payload);

//     blacklist.configure({
//       tokenId: decoded.payload.iat.toString(),
//     });

//     return res.json(messages.successLogIn(user, token));
//   })(req, res);
// };

// export const signout = (app) => (req, res) => {
// //  console.log(req.user)
//   const token = req.headers.authorization.split(' ')[1];

//   console.log(req.auth);
//   console.log(token);
//   blacklist.revoke(req.user);

//   return res.redirect('/api');
// };


// export const requireSignin = (app) => expressJwt({
//   secret: app.get(SECRET_KEY_AUTH),
//   isRevoked: blacklist.isRevoked,
//   userProperty: 'auth'
// });

// const isRevokedCallback = function (req, payload, done) {
//   const issuer = payload.iss;
//   const tokenId = payload.jti;

//   data.getRevokedToken(issuer, tokenId, function (err, token) {
//     if (err) {
//       return done(err);
//     }
//     return done(null, !!token);
//   });
// };