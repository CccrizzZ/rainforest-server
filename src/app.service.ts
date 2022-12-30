import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  // constructor(@InjectConnection() private connection: Connection) {
  //   console.log('AppService Created');
  // }
  connectToMongoDB(): string {
    return `MONGO: ${process.env.MONGOCONN}`;
  }
}
