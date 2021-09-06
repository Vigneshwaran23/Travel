import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = "https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576";
    return this.http.get(url);
  }
}
