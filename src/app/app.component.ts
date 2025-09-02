import { Component } from '@angular/core';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';

@Component({
  selector: 'app-root',
  
  imports: [LeftContainerComponent,RightContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weatherapp';
}
