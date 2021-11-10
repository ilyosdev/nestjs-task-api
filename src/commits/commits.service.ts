import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { CommitsModel } from './commits.dto';

@Injectable()
export class CommitsService {

  async getCommits(body: CommitsModel): Promise<any> {
    const urlBody = 'https://api.github.com/repos'
    const branch = body.branch ?? 'master'
    const per_page = body.per_page ?? 25;
    const response =  await axios.get(`${urlBody}/${body.user}/${body.repo}/commits?sha=${branch}&per_page=${per_page}`)
    if(body.message) {
      return this.retriveMessages(response.data)
    }
    return response.data;
  }
  
  private retriveMessages(arr): any {
    return arr.map(el=> ({message: el.commit.message, url: el.commit.url}))
  }
}
