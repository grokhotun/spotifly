import 'reflect-metadata';
import { DataSource } from 'typeorm';

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'spotifly',
  logging: true,
  entities: ['backend/models/**/*.ts'],
  migrations: ['backend/migrations/**/*.ts'],
});

export { PostgresDataSource };
