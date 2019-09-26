import express from 'express';
import { updateCurrentUser } from '../controllers/user';
import usersRouter from './users';

const router = express.Router();

const userRouter = (app) => {

  router.use('/users', usersRouter(app));

  router.route('/')
    .get((req, res) => {
      // console.log(req.sessionID);
      res.json(req.user);
    })
    .put(updateCurrentUser);

  return router;

};

export default userRouter;