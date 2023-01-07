import { PlantModule } from './plants/plant.module';
import { PlantController } from './plants/plant.controller';
import { PlantService } from './plants/plant.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PlantSchema, Plant, PlantDocument } from 'src/schema/plant.schema';
import * as dotenv from 'dotenv';

// get connection string from env file
dotenv.config();
console.log(process.env.MONGOCONN);
@Module({
  imports: [
    PlantModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOCONN), // connect to mongoDB
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
