import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/', (req, res) => {
  models.transaction(async transaction => {
    const res = await models.query('SELECT * FROM PostCategories', {
      transaction: transaction
    });
    console.log('query result : ', res);
  });
  res.render('index');
});

export default router;