// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { DataSource } from 'typeorm'
// import { AppController } from './controller/app.controller'
// import { AppService } from './service/app.service'
// import { CustomNamingStrategy } from './customNamingStrategy'

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: '127.0.0.1',
//       port: 5432,
//       username: 'postgres',
//       password: 'postgres',
//       database: 'knove-dev',
//       entities: ['src/entity/*.ts'],
//       migrations: ['src/migration/**/*.ts'],
//       synchronize: true, // TODO: 本番環境では推奨されていないため、環境によって分ける
//       namingStrategy: new CustomNamingStrategy(),
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {
//   constructor(private dataSource: DataSource) {}

import { Module } from '@nestjs/common'
import { TestModule } from './module/test.module'

@Module({
  imports: [TestModule],
})
export class AppModule {}
