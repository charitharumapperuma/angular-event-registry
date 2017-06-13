import { Component, OnInit, Renderer2 } from '@angular/core';
import { EventRegistryService } from '../shared/event-registry.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {

  constructor(
    private renderer: Renderer2,
    private eventRegistry: EventRegistryService
  ) {
    /*renderer.listen('document', 'keyup', (event: KeyboardEvent ) => {
      this.eventRegistry.trigger(event.key);
    });*/
  }

}
