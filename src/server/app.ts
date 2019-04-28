import express from 'express';
import { createServer } from 'http';
import Sequelize from 'sequelize';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);

const app = express();
app.set('port', 1337);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(webpackConfig.output.path));

const server = createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
