import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { EventRegistryService } from './shared/event-registry.service';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EventRegistryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
