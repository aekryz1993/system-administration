/* eslint-disable no-console */
import http from 'http';
// import path from 'path';
import app from './app';
import { hostServer, baseDevUrl } from './config/config';

http.createServer(app).listen(hostServer(app)['port'], () => {
  console.log('Express started in ' + process.env.NODE_ENV +
        ' mode on ' + baseDevUrl(app) +
        '; press Ctrl-C to terminate.');
});