import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import e from 'express';
import { map, Observable } from 'rxjs';
import { CommitsModel } from './commits.dto';

@Injectable()
export class CommitsService {
  constructor(private httpService: HttpService){}

  async getCommits(body: CommitsModel): Promise<Observable<any>> {
    const urlBody = 'https://api.github.com/repos'
    const branch = body.branch ?? 'master'
    const per_page = body.per_page ?? 25;
    let data =  await this.httpService.get(`${urlBody}/${body.user}/${body.repo}/commits?sha=${branch}&per_page=${per_page}`)
    .pipe(
      map((response) => {
        return response.data;
      }),
    )
    return data;
  }
}
