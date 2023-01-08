import { ObjectId } from 'mongodb';

export default interface Plant {
  _id: ObjectId;
  name: string;
  dominant: string;
  seedType: string;
  amount: number;
  thc: number;
  cbd: number;
  plantDate: string;
  stage: string;
}
