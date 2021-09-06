import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = "https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c";
    return this.http.get(url);
  }
}
