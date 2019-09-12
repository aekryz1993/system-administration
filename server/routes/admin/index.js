import express from 'express';
import authRouter from './auth';

const router = express.Router();

const adminRouter = (app, passport) => {

  router.get('/', (req, res) => {
    res.json('Admin API');
  });

  router.use('/auth', authRouter());

  return router;

};

export default adminRouter;