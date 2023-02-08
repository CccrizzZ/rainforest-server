import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { PlantService } from './plant.service';
import PlantDto from 'src/schema/plant.dto';
import { Plant } from '../schema/plant.schema';

// controller for plants data mongoDB operation
@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get('all')
  async getAllPlants(): Promise<Plant[]> {
    const result = await this.plantService.getAllPlants();
    return result;
  }

  @Get(':id')
  async getSinglePlant(@Param('id') id: string): Promise<Plant> {
    const result = await this.plantService.getSinglePlant(id);
    return result;
  }

  @Delete(':id')
  async deletePlant(@Param('id') id: string): Promise<boolean> {
    const result = await this.plantService.deletePlant(id);
    console.log(`removes #${id} plant`);
    return result;
  }

  @Post('create')
  async createPlant(@Body() plantDto: PlantDto): Promise<void> {
    this.plantService.create(plantDto); // body will be a json object
  }

  @Put(':id')
  async updatePlant(
    @Param('id') id: string,
    @Body() plantDto: PlantDto,
  ): Promise<Plant> {
    console.log(`updating plant ${id} to plant ${plantDto.name}`);
    return await this.plantService.updatePlant(id, plantDto);
  }
}
