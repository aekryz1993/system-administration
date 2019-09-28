import express from 'express';
import { updateCurrentUser } from '../controllers/user';
import usersRouter from './users';
import { logout } from '../controllers/auth';

const router = express.Router();

const userRouter = (app) => {

  router.use('/users', usersRouter(app));

  router.route('/')
    .get((req, res) => {
      
      res.json(req.user);
    })
    .put(updateCurrentUser);

  router.route('/logout')
    .get(logout(app));

  return router;

};

export default userRouter;