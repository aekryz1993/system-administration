/* eslint-disable no-console */
import http from 'http';
// import path from 'path';
import app from './app';
import { hostServer, baseDevUrl } from './config/config';
import connect, {config} from './db/connection';
import runDev from './db/seeds';

const db = connect(config(app));

(async () => {
  try {
    await db.sequelize.sync();
    await runDev(app);
    db.sequelize.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
    return;
  } catch (err) {
    console.log(err);
  }
})();

http.createServer(app).listen(hostServer(app)['port'], () => {
  console.log('Express started in ' + process.env.NODE_ENV +
        ' mode on ' + baseDevUrl(app) +
        '; press Ctrl-C to terminate.');
});