type DBConfigType = {
  username: string;
  password: string;
  database: string;
  host: string;
  port?: number;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;
  timezone: string;
};

export default {
  development: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: '127.0.0.1',
    port: 13306,
    dialect: 'mysql',
    timezone: '+09:00'
  },
  test: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: 'testdb',
    dialect: 'mysql',
    timezone: '+09:00'
  },
  production: {
    username: 'user',
    password: 'password',
    database: 'database',
    host: 'productiondb',
    dialect: 'mysql',
    timezone: '+09:00'
  }
} as {
  [env: string]: DBConfigType;
};
