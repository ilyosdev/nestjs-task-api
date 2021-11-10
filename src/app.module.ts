import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';

@Module({
  imports: [ 
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
  }),
  CommitsModule],
})
export class AppModule {}
