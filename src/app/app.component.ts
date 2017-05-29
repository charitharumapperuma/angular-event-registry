import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { EventRegistryService } from './shared/event-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  listenFunc: Function;

  constructor(
    private renderer: Renderer2,
    private eventRegistry: EventRegistryService
  ) {
    this.listenFunc = renderer.listen('document', 'keyup', (event: KeyboardEvent ) => {
      // console.log(event);
      this.eventRegistry.trigger(event.key);
    });
  }

  ngOnDestroy() {
    this.listenFunc();
  }
}
