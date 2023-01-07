import { ApiProperty } from '@nestjs/swagger';

export default class CreatePlantDto {
  @ApiProperty({ required: true })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  dominant: string;

  @ApiProperty({ required: true })
  seedType: string;

  @ApiProperty({ required: true })
  amount: number;

  @ApiProperty({ required: true })
  thc: number;

  @ApiProperty({ required: true })
  cbd: number;

  @ApiProperty({ required: true })
  plantDate: string;

  @ApiProperty({ required: true })
  stage: string;
}
