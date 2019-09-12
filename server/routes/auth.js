import express from 'express';
import { signIn, logout } from '../controllers/auth';

const router = express.Router();

const authRouter = (app, passport) => {

  router.get('/', (req, res) => {
    res.json('LOG IN --------------- SIGN UP');
  });

  router.post('/login', signIn(app, passport), logout(app));

  // router.post('/signin', signin(app));

  router.get('/logout', passport.authenticate('userJwt', {
    session: false
  }), logout(app));

  // router.get('/signout', requireSignin(app), signout(app))

  return router;

};

export default authRouter;