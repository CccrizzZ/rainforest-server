import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export class User {
  @Prop({ required: true })
  _id: ObjectId;

  @Prop({ required: true })
  userName: string;

  @Prop({ required: true })
  userPassword: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
