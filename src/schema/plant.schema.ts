import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'mongodb';

// define mongodb data schema
@Schema()
export class Plant {
  @Prop({ required: true })
  _id: ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  dominant: string;

  @Prop()
  seedType: string;

  @Prop()
  amount: number;

  @Prop()
  thc: number;

  @Prop()
  cbd: number;

  @Prop()
  plantDate: string;

  @Prop()
  stage: string;

  @Prop()
  growingMedia: string;
}

// export document
export type PlantDocument = HydratedDocument<Plant>;
// export schema
export const PlantSchema = SchemaFactory.createForClass(Plant);
