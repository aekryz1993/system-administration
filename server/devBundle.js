import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import clientConfig from '../tools/client.dev';
import serverConfig from '../tools/server.dev';

const { publicPath } = clientConfig.output
// const outputPath = clientConfig.output.path
const DEV = process.env.NODE_ENV === 'development';

const compile = (app) => {

  if (DEV) {
    const compiler = webpack([clientConfig, serverConfig]);
    const clientCompiler = compiler.compilers[0]
    const options = { publicPath, stats: { colors: true } }
    const devMiddleware = webpackDevMiddleware(compiler, options)

    app.use(devMiddleware)
    app.use(webpackHotMiddleware(clientCompiler))
    app.use(webpackHotServerMiddleware(compiler))

    return app;
  }
};

export default {
  compile
};