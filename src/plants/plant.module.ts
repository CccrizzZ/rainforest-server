import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { PlantSchema, Plant } from 'src/schema/plant.schema';
import * as dotenv from 'dotenv';

// get connection string from env file
dotenv.config();

// connection config
const config: MongooseModuleOptions = {
  dbName: 'rainforest',
};

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOCONN, config), // connect to mongoDB
    MongooseModule.forFeature([{ name: Plant.name, schema: PlantSchema }]),
  ],
  controllers: [PlantController],
  providers: [PlantService],
})
export class PlantModule {}
