import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export default class PlantDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  _id: ObjectId;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  dominant: string;

  @ApiProperty()
  @IsString()
  seedType: string;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  thc: number;

  @ApiProperty()
  @IsNumber()
  cbd: number;

  @ApiProperty()
  @IsString()
  plantDate: string;

  @ApiProperty()
  @IsString()
  stage: string;

  @ApiProperty()
  @IsString()
  growingMedia: string;
}
