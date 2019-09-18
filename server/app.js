import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import compress from 'compression';
import logger from 'morgan';
import passport from 'passport';
// import favicon from 'serve-favicon';
import { SECRET_KEY_AUTH, SECRET_KEY_AUTH_VALUE } from './config/config';
import apiRouter from './routes';
import devBundle from './devBundle';
import createError from 'http-errors';

const CURRENT_WORKING_DIR = process.cwd();
const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set(SECRET_KEY_AUTH, SECRET_KEY_AUTH_VALUE);

app.use(logger('dev'));

app.use(cookieParser());

app.use(compress());

app.disable('x-powered-by')

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// secure apps by setting various HTTP headers
app.use(helmet());

app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/api', apiRouter(app, passport));

devBundle.compile(app, express);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   console.log(err);
//   res.json({error: '404 error'});
// });

export default app;