import { Controller, Get, Param, Delete, Post } from '@nestjs/common';
import { PlantService } from './plant.service';
import CreatePlantDto from 'src/schema/plant.dto';
import Plant from '../schema/plantInterface';

const examplePlant: CreatePlantDto = {
  id: '1',
  name: 'example plant',
  dominant: 'sativa',
  seedType: 'auto',
  amount: 1,
  thc: 24,
  cbd: 2,
  plantDate: 'today',
  stage: 'germination',
};

// controller for all plants data mongoDB operation
@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get('/all')
  async getAllPlants(): Promise<Plant[]> {
    const result = await this.plantService.getAllPlants();
    console.log(result);
    return result;
  }

  @Get('/:id')
  getSinglePlant(@Param() params: { id: string }): Promise<Plant> {
    console.log(this.plantService.getSinglePlant(params.id));
    return this.plantService.getSinglePlant(params.id);
  }

  @Delete('delete/:id')
  deletePlant(@Param('id') id: string) {
    return `This action removes #${id} plant`;
  }

  @Post('/create')
  createPlant(): void {
    this.plantService.create(examplePlant);
  }
}
