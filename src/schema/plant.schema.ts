import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// define document
export type PlantDocument = HydratedDocument<Plant>;

// define schema
@Schema()
export class Plant {
  @Prop()
  name: string;

  @Prop()
  id: string;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);
