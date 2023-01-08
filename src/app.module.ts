import { PlantModule } from './plants/plant.module';
import { Module, UseGuards } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PlantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
