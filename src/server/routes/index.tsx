import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import models from '../models';
import VIEWS from '../views';
import App from '../../client/App';

const router = express.Router();

router.get('/', (req, res) => {
  // models.transaction(async transaction => {
  //   const res = await models.query('SELECT * FROM PostCategories', {
  //     transaction: transaction
  //   });
  //   console.log('query result : ', res);
  // });

  const stream = ReactDOMServer.renderToString(
    <VIEWS>
      <App />
    </VIEWS>
  );

  // stream.pipe(res);
  res.send(stream);
});

export default router;
