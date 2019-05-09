type DBConfigType = {
  username: string;
  password: string;
  database: string;
  host: string;
  port?: number;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;
  timezone: string;
};
export default DBConfigType;
