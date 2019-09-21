/* eslint-disable no-console */
import http from 'http';
// import path from 'path';
import app from './app';
import { hostServer, baseDevUrl } from './config/config';
import connect, {config} from './db/connection';

// connect to mongodb
connect(config(app));

http.createServer(app).listen(hostServer(app)['port'], () => {
  console.log('Express started in ' + app.get('env') +
        ' mode on ' + baseDevUrl(app) +
        '; press Ctrl-C to terminate.');
});