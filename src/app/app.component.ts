import { Component } from '@angular/core';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends WindowComponent {
  title = 'app works!';
}
