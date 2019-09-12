import express from 'express';

const router = express.Router();

const groupsRouter = (app) => {

  router.get('/', (req, res, next) => {
    res.send('GROUPS\' router');
  });

  return router;

};

export default groupsRouter;