import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlantSchema, Plant, PlantDocument } from 'src/schema/plant.schema';
import { Model } from 'mongoose';
import CreatePlantDto from 'src/schema/plant.dto';

// const examplePlantsData: Plant[] = [
//   {
//     id: '1',
//     name: 'orange',
//     dominant: 'indica',
//     seedType: 'autoflower',
//     amount: 1,
//     thc: 20,
//     cbd: 1,
//     plantDate: 'today',
//     stage: 'vegetation',
//   },
//   {
//     id: '2',
//     name: 'banana',
//     dominant: 'indica',
//     seedType: 'autoflower',
//     amount: 1,
//     thc: 20,
//     cbd: 1,
//     plantDate: 'today',
//     stage: 'vegetation',
//   },
//   {
//     id: '3',
//     name: 'grape',
//     dominant: 'indica',
//     seedType: 'autoflower',
//     amount: 1,
//     thc: 20,
//     cbd: 1,
//     plantDate: 'today',
//     stage: 'vegetation',
//   },
// ];

@Injectable()
export class PlantService {
  constructor(
    @InjectModel(Plant.name) private plantModel: Model<PlantDocument>,
  ) {
    console.log('plantService constructed!!!');
  }

  // get all plants as array
  getAllPlants(): Promise<Plant[]> {
    return this.plantModel.find().exec();
  }

  // create a new plant
  async create(createPlantDto: CreatePlantDto): Promise<Plant> {
    const newPlant = new this.plantModel(createPlantDto);
    return newPlant.save();
  }

  // get single plant by id
  async getSinglePlant(id: string): Promise<Plant> {
    return;
  }

  // delete plant by id
  deletePlant(id: string): void {
    console.log(`deleting plant: ${id}`);
  }
}
