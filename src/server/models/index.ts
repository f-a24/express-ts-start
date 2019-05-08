import { Sequelize } from 'sequelize';
import dbConfig from '../config/db';

const db = dbConfig[process.env.NODE_ENV || 'development'];
export default new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,
  timezone: db.timezone
});
