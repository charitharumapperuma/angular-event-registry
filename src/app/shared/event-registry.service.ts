import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventRegistryService {

  private registry: Map<string, Subject<any>> = new Map<string, Subject<any>>();

  public registerEvent(key: string): Observable<any> {
    if (!this.registry.has(key)) {
      this.registry.set(key, new Subject());
      return this.registry.get(key).asObservable();
    } else {
      this.registry.delete(key);
      return null;
    }
  }

  trigger(key) {
    if (this.registry.has(key)) {
      this.registry.get(key).next();
    }
  }
}
