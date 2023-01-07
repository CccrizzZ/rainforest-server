import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// define mongodb data schema
@Schema()
export class Plant {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dominant: string;

  @Prop({ required: true })
  seedType: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  thc: number;

  @Prop({ required: true })
  cbd: number;

  @Prop({ required: true })
  plantDate: string;

  @Prop({ required: true })
  stage: string;
}

// export document
export type PlantDocument = HydratedDocument<Plant>;
// export schema
export const PlantSchema = SchemaFactory.createForClass(Plant);
