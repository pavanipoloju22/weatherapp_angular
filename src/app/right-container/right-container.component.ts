import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';


@Component({
  selector: 'app-right-container',
  standalone: true, 
imports: [CommonModule, FontAwesomeModule], 
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

  constructor(public weatherService: WeatherService) {

  }

// fa icons thumsup/down and smile /frown
faThumbsUp:any = faThumbsUp;
faThumbsDown:any = faThumbsDown;
faFaceSmile:any = faFaceSmile;
faFaceFrown:any = faFaceFrown;

  

 //Function  to control tab values or tab states
  // functions for click of tab Today
 onTodayClick(){
  this.weatherService.today = true;
  this.weatherService.week = false;
 }
   // functions for click of tab Week
 onWeekClick(){
   this.weatherService.week = true;
   this.weatherService.today = false;
 }
// functions to control metric values
  // functions for click of metric celsius

onCelsiusClick(){
  this.weatherService.celsius = true;
  this. weatherService.fahrenheit = false;
}
  // functions for click of metric fahrenheit

onFahrenheitClick(){
  this.weatherService.fahrenheit = true;
  this.weatherService.celsius = false;
}
}
