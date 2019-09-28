import express from 'express';
import { signIn } from '../controllers/auth';

const router = express.Router();

const authRouter = (app, passport) => {

  router.get('/', (req, res) => {
    res.json('LOG IN --------------- SIGN UP');
  });

  router.post('/login', signIn(app, passport));

  // router.get('/logout', passport.authenticationMiddleware, logout(app));

  return router;

};

export default authRouter;