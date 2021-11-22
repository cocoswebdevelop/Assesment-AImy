import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { chats } from '../interfaces/chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http: HttpClient) { }

  async getChats(): Promise<Array<chats>>{
    const chats = await this._http.get<Array<chats>>('./assets/data/chats.json').toPromise();
    return chats;
  }
}
