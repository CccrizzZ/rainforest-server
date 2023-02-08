import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plant, PlantDocument } from 'src/schema/plant.schema';
import { Model } from 'mongoose';
import PlantDto from 'src/schema/plant.dto';

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
  async getSinglePlant(id: string): Promise<Plant> {
    console.log(`get plant ${id} by id`);
    return await this.plantModel.findById(id).exec();
  }

  // delete plant by id
  async deletePlant(id: string): Promise<boolean> {
    console.log(`deleting plant: ${id}`);
    const remove = await this.plantModel.find({ _id: id }).remove().exec();
    if (remove) {
      return true;
    }
  }

  // create a new plant
  async create(plantDto: PlantDto): Promise<Plant> {
    console.log(`create new plant: ${plantDto}`);
    const newPlant = new this.plantModel(plantDto);
    return await newPlant.save();
  }

  // update plant by id
  async updatePlant(targetID: string, plantDto: PlantDto): Promise<Plant> {
    console.log('update plant');
    return this.plantModel.findByIdAndUpdate(targetID, plantDto, {
      new: true,
    });
  }
}
