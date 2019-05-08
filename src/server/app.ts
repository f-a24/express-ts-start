import express from 'express';
import { createServer } from 'http';
import helmet from 'helmet';
import index from './routes/index';

const app = express();
app.set('port', 1337);

// VIEW
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// CSP
app.use(helmet());

// HMR
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(express.static(webpackConfig.output.path));
app.use('/', index);

const server = createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
