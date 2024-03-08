import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/database.config';

export default new DataSource({
  ...databaseConfig,
  migrations: [__dirname + '/../migrations/*.ts'],
});
