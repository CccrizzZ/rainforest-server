import { Controller, Get, Param, Delete } from '@nestjs/common';
import { PlantService } from './plant.service';
import Plant from '../schema/plantInterface';

// controller for all plants data mongoDB operation
@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get('/all')
  getAllPlants(): Plant[] {
    console.log(this.plantService.getAllPlants());
    return this.plantService.getAllPlants();
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
}
