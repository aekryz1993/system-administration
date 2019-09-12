export const devHostServer = {
  host: 'localhost',
  port: process.env.PORT || 3000
};

const prodHostServer = {
  host: process.env.HOST || ''
};

export const hostServer = (app) => app.get('env') === 'development' ? devHostServer : prodHostServer;

export const baseDevUrl = (app) => app.get('env') === 'development' ? `http://${devHostServer.host}:${devHostServer.port}` : `http://${prodHostServer.host}`;

export const mailer = {
  userMailer: 'mailernode100@gmail.com',
  passMailer: 'nodemailer100'
};

export const SECRET_KEY_AUTH = process.env.SECRET_KEY_AUTH || 'SECRET_KEY_AUTH';
export const SECRET_KEY_AUTH_VALUE = process.env.SECRET_KEY_AUTH_VALUE || 'mxkfHC28Ghnxm554DD';
export const jwtConfig = {
  expiresIn: '2h',
};