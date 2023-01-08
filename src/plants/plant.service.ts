import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plant, PlantDocument } from 'src/schema/plant.schema';
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
    console.log('get all plants array');
    return this.plantModel.find().exec();
  }

  // get single plant by id
  getSinglePlant(id: string): Promise<Plant> {
    console.log('get plant by id');
    return this.plantModel.findById(id).exec();
  }

  // delete plant by id
  deletePlant(id: string): void {
    console.log(`deleting plant: ${id}`);
    this.plantModel.find({ id: id }).remove().exec();
  }

  // create a new plant
  create(createPlantDto: CreatePlantDto): Promise<Plant> {
    console.log(`create new plant: ${createPlantDto}`);
    const newPlant = new this.plantModel(createPlantDto);
    return newPlant.save();
  }

  updatePlant(createPlantDto: CreatePlantDto): Promise<Plant> {
    console.log('update plant');
    const newPlant = new this.plantModel(createPlantDto);
    return newPlant.save();
  }
}
