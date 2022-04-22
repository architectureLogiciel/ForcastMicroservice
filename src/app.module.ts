import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: 'root',
        password: 'mdp',
        database: "forcast",
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }
    ),
    ProductsModule,
    UsersModule,
    AuthModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
