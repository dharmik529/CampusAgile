//type 'npm install pg typeorm @nestjs/typeorm' to install the ps dependencies in the terminal
//type 'npm install --save @nestjs/typeorm typeorm pg' to install the ps dependencies in the terminal
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'dhamu.xyz',
  port: 5432,
  username: 'campusagileapi',
  password: 'campusagileapipassword',
  database: 'campusagile',
  autoLoadEntities: true,
  synchronize: false, // Set to false in production
};

export default typeOrmConfig;
