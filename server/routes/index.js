import express from 'express';
import userRouter from './user';
import authRouter from './auth';
import { localPassportStrategy, jwtPassportStrategy } from '../config/passport-config';

const router = express.Router();

const apiRouter = (app, passport) => {

  app.use(passport.initialize());
  localPassportStrategy(passport);
  jwtPassportStrategy(passport);

  router.get('/', (req, res, next) => {
    res.send('APIs router');
  });

  router.use('/currentuser', passport.authenticate('userJwt', {session: false}), userRouter(app));
  router.use('/auth', authRouter(app, passport));

  return router;

};

export default apiRouter;