import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { GetaquoteComponent } from './getaquote/getaquote.component';

const routes: Routes = [
    {path:'weather', component:WeatherComponent},
    {path:'destinations', component:DestinationsComponent},
    {path:'getaquote', component:GetaquoteComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WeatherComponent, DestinationsComponent, GetaquoteComponent]