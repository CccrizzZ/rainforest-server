import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  connectToMongoDB(): string {
    return `MONGO: ${process.env.MONGOCONN}`;
  }
}
