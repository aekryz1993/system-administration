import Sequelize from 'sequelize';
// import runDev from './seeds';
import Permissions from '../models/Permissions';
import User from '../models/User';

function connect(config = {}, db= {}) {
    
  // const options = config.options || {};

  const isDev = (config.mode === devConfig.mode);

  // console.log(isDev);

  const sequelize = new Sequelize(config.env.database, config.env.username, config.env.password, {
    host: config.env.host,
    dialect: config.env.dialect,
    logging: false,
  });

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.permissions = Permissions(sequelize, Sequelize);
  db.user = User(sequelize, Sequelize, db.permissions);

  return db;

}

// options = {
//     autoReconnect: true,
//     reconnectTries: 1000000,
//     reconnectInterval: 3000
// }

const env = {
  database: 'aekryz',
  username: 'root',
  password: 'abdelkader93',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const devConfig = {
  mode: 'development',
  env: env
};

const prodConfig = {
  mode: 'production',
  env: env
};

export const testConfig = {
  mode: 'test'
};

export const config = (app) => (app.get('env') === 'development') ? devConfig : prodConfig;

export default connect;