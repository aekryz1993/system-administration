import express from 'express';
import session from 'express-session';
import redis from 'redis';
import uuid from 'uuid';
import connectRedis from 'connect-redis';
import userRouter from './user';
import authRouter from './auth';
import { localPassportStrategy } from '../config/passport-config';
import { SESSION_SECRET } from '../config/config';
import User from '../models/User';

const router = express.Router();

const redisClient = redis.createClient();
const RedisStore = connectRedis(session);

const apiRouter = (app, passport) => {

  redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
  });

  redisClient.on('connect', () => {
    console.log('Redis connected...');
  });

  app.use(session({
    genid: () => {
      return uuid();
    },
    secret: app.get(SESSION_SECRET),
    store: new RedisStore({ port: 6379, client: redisClient, ttl: 86400 }),
    name: 'admin_sid', 
    resave: false,
    cookie: { secure: false, maxAge: 86400000 },
    saveUninitialized: false,
  }));

  localPassportStrategy(passport);

  app.use(passport.initialize());
  app.use(passport.session());

  router.get('/', (req, res) => {
    res.status(401).send('doesn\'t authenticated');
  });

  router.use('/currentuser', passport.authenticationMiddleware, userRouter(app, redisClient));
  router.use('/auth', authRouter(app, passport));

  return router;

};

export default apiRouter;