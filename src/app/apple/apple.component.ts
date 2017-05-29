import { Component, OnInit } from '@angular/core';
import { EventRegistryService } from '../shared/event-registry.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  private actions: Map<string, any> = new Map([
    ['q', () => { console.log('Q key pressed'); }],
    ['w', () => { console.log('W key pressed'); }],
    ['e', () => { console.log('E key pressed'); }]
  ]);

  constructor(
    private eventRegistry: EventRegistryService
  ) { }

  ngOnInit() {
    this.actions.forEach((f, key) => {
      this.eventRegistry.registerEvent(key).subscribe(f);
    });
  }

  clickQ() {
    this.eventRegistry.trigger('q');
  }

  clickW() {
    this.eventRegistry.trigger('w');
  }

  clickE() {
    this.eventRegistry.trigger('e');
  }

}
