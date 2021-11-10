import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CommitsService } from './commits.service';
import { CommitsModel } from './commits.dto';

@Controller()
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post('/commits')
  getCommits(@Body() body: CommitsModel): Promise<Observable<Array<Object>>> {
    return this.commitsService.getCommits(body);
  }
}
