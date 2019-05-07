import express from 'express';
import { createServer } from 'http';
import index from './routes/index';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);

const app = express();
app.set('port', 1337);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));
app.use(express.static(webpackConfig.output.path));

app.use('/', index);

const server = createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
