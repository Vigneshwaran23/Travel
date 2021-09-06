import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTravelApp';
  data:any
  imageData:any
  constructor(private dataService:DataServiceService, private imageService:ImageService)
{
    this.dataService.getData().subscribe((data)=>{
      console.warn("data",data)
     this.data = data
  })
  this.imageService.getData().subscribe((response)=>{
    console.warn("response",response)
   this.imageData = response
})
}
}
