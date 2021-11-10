import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import {  CommitsService } from './commits.service';

@Module({
  imports: [HttpModule],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
