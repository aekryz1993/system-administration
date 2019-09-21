import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import clientConfig from '../tools/client.dev';
import serverConfig from '../tools/server.dev';
const clientConfigProd = require('../tools/client.prod');
const serverConfigProd = require('../tools/server.prod');

const { publicPathDev } = clientConfig.output;
const { publicPath } = clientConfigProd.output;
const outputPath = clientConfigProd.output.path;


const compile = (app, express) => {

  if (app.get('env') === 'development') {
    const compiler = webpack([clientConfig, serverConfig]);
    const clientCompiler = compiler.compilers[0];
    const options = { publicPathDev, stats: { colors: true } };
    const devMiddleware = webpackDevMiddleware(compiler, options);

    app.use(devMiddleware);
    app.use(webpackHotMiddleware(clientCompiler));
    app.use(webpackHotServerMiddleware(compiler));

    return app;
  } else {
    return webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
      // console.log(stats);
      const clientStats = stats.toJson().children[0];
      
      const serverRender = require('../buildServer/main.js').default;

      app.use(publicPath, express.static(outputPath));
      app.use(serverRender({ clientStats }));

      return app;
    });
  }
};

export default {
  compile
};