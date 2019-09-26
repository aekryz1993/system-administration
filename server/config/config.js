export const devHostServer = {
  host: 'localhost',
  port: process.env.PORT || 3000
};

const prodHostServer = {
  host: 'localhost',
  port: process.env.PORT || 3000
};

export const hostServer = (app) => app.get('env') === 'development' ? devHostServer : prodHostServer;

export const baseDevUrl = (app) => app.get('env') === 'development' ? `http://${devHostServer.host}:${devHostServer.port}` : `http://${prodHostServer.host}`;

export const mailer = {
  userMailer: 'mailernode100@gmail.com',
  passMailer: 'nodemailer100'
};

export const SESSION_SECRET = process.env.SESSION_SECRET || 'SECRET_KEY_AUTH';
export const SESSION_SECRET_VALUE = process.env.SESSION_SECRET_VALUE || 'mxkfHC28Ghnxm554DD';
export const jwtConfig = {
  expiresIn: '2h',
};