import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScaleModule } from './scale/scale.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: ".env"}),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        await ConfigModule.envVariablesLoaded;

        return {
          type: "postgres",
          host: process.env.DATABASE_HOST,
          port: +process.env.DATABASE_PORT,
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: [],
          synchronize: false
        }
      }
    }), ScaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
