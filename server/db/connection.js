import mongoose from 'mongoose';
import runDev from './seeds';

mongoose.Promise = Promise;

function connect(config = {}) {
    
  const options = config.options || {};

  mongoose.connection.on('connected', () => {
    console.log('Connection Established at ' + config.uri);
    runDev(config.uri, devConfig.uri);
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Connection Reestablished');
    // if (isDev) runDev()
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Connection Disconnected');
  });

  mongoose.connection.on('close', () => {
    console.log('Connection Closed');
  });

  mongoose.connection.on('error', (error) => {
    console.log('ERROR: ' + error);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

  const run = async () => {
    await mongoose.connect(config.uri, options);
  };

  run().catch(error => console.error('[[ failed to connect to mongodb!!! ]] ', error));
}

// const options = {
//   autoReconnect: true,
//   reconnectTries: 1000000,
//   reconnectInterval: 3000
// };

const devConfig = {
  uri: process.env.MONGO_DEV_URI || 'mongodb://localhost:27017/system-admin',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true
  },
};

const prodConfig = {
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017/system-admin-dev',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    // autoIndex: false
  },
};

export const testConfig = {
  uri: process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/system-admin-test',
  options: {},
};

export const config = (app) => (app.get('env') === 'development') ? devConfig : prodConfig;

export default connect;