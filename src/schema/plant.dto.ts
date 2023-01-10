import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

export default class PlantDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  _id: ObjectId;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  dominant: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  seedType: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  thc: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  cbd: number;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  plantDate: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  stage: string;
}
