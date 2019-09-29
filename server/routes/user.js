import express from 'express';
import { updateCurrentUser } from '../controllers/user';
import usersRouter from './users';
import { logout } from '../controllers/auth';

const router = express.Router();

const userRouter = (app, redisClient) => {

  // function cache(req, res, next) {
  //   const id = req.user._id.toString();
  
  //   redisClient.get(id, (err, data) => {
  //     if(err) throw err;

  //     if(data !== null) {
  //       return res.json(JSON.parse(data));
  //     } else {
  //       next();
  //     }
  //   });
  // }
  
  router.use('/users', usersRouter(app));

  router.route('/')
    .get((req, res) => {
      // redisClient.setex(req.user._id.toString(), 86400, JSON.stringify(req.user));
      res.json(req.user);
    })
    .put(updateCurrentUser);

  router.route('/logout')
    .get(logout(app));

  return router;

};

export default userRouter;