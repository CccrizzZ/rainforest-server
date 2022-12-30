import { Injectable } from '@nestjs/common';
import Plant from '../schema/plantInterface';

const examplePlantsData: Plant[] = [
  {
    id: '1',
    name: 'orange',
    dominant: 'indica',
    seedType: 'autoflower',
    amount: 1,
    thc: 20,
    cbd: 1,
    plantDate: 'today',
    stage: 'vegetation',
  },
  {
    id: '2',
    name: 'banana',
    dominant: 'indica',
    seedType: 'autoflower',
    amount: 1,
    thc: 20,
    cbd: 1,
    plantDate: 'today',
    stage: 'vegetation',
  },
  {
    id: '3',
    name: 'grape',
    dominant: 'indica',
    seedType: 'autoflower',
    amount: 1,
    thc: 20,
    cbd: 1,
    plantDate: 'today',
    stage: 'vegetation',
  },
];

@Injectable()
export class PlantService {
  public plantsData: Plant[] = examplePlantsData;

  // get all plants as array
  getAllPlants(): Plant[] {
    return this.plantsData;
  }

  // get single plant by id
  async getSinglePlant(id: string): Promise<Plant> {
    this.plantsData.forEach((element) => {
      if (element.id === id) {
        return element;
      }
    });
    return;
  }

  // delete plant by id
  deletePlant(id: string): void {
    console.log(`deleting plant: ${id}`);
  }
}
