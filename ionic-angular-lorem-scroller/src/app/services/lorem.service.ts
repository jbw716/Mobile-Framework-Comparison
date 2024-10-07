import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoremService {

  constructor(public http: HttpClient) { }

  public async getLorem(): Promise<string[]> {
    return await firstValueFrom(this.http.get<string[]>(environment.apiUrl + '/lorem/20'));
  }
}
