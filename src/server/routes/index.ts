import express from 'express';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'user', 'password', {
  host: '127.0.0.1',
  port: 10000,
  dialect: 'mysql',
  timezone: '+09:00'
});
sequelize.transaction(async transaction => {
  const res = await sequelize.query('SELECT * FROM table', {
    transaction: transaction
  });
  console.log('query result : ', res);
});

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

export default router;
