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
import CreatePlantDto from 'src/schema/plant.dto';
import { Plant } from '../schema/plant.schema';

// const examplePlant: CreatePlantDto = {
//   name: 'example plant',
//   dominant: 'sativa',
//   seedType: 'auto',
//   amount: 1,
//   thc: 24,
//   cbd: 2,
//   plantDate: 'today',
//   stage: 'germination',
// };

// controller for all plants data mongoDB operation
@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get('all')
  async getAllPlants(): Promise<Plant[]> {
    const result = await this.plantService.getAllPlants();
    console.log(result);
    return result;
  }

  @Get(':id')
  async getSinglePlant(@Param() params: { id: string }): Promise<Plant> {
    const result = await this.plantService.getSinglePlant(params.id);
    return result;
  }

  @Delete(':id')
  async deletePlant(@Param('id') id: string) {
    return `This action removes #${id} plant`;
  }

  @Post('create')
  async createPlant(@Body() createPlantDto: CreatePlantDto): Promise<void> {
    // need to be fixed
    this.plantService.create(createPlantDto);
  }

  @Put('update')
  async updatePlant(
    @Param() id: string,
    @Body() createPlantDto: CreatePlantDto,
  ): Promise<void> {
    this.plantService.updatePlant(createPlantDto);
  }
}
