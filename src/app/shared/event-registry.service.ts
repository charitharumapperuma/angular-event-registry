import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class EventRegistryService {

  private actionRegistry: Map<string, Subject<any>> = new Map<string, Subject<any>>();
  private shortcutRegistry: Map<string, string> = new Map<string, string>();

  constructor(@Inject(DOCUMENT) private document: any) {
    // Listen to document keyboard events
    this.document.addEventListener('keydown', (event: KeyboardEvent ) => {
      // if there is a registered action, trigger it
      const code = this.prepareShortcutCode(this.readKeyCodes(event));
      console.log('code: ' + code);
      const actionKey = this.shortcutRegistry.get(code);
      console.log(actionKey);
      if (actionKey) {
        this.trigger(actionKey);
      }
    });
  }

  /**
   * Registers an action
   * @param id unique identifier of the action
   * @param shortcut list of keys associated with the shortcut
   * @returns {Observable<T>} action observable
   */
  public registerEvent(id: string, keys?: string[]): Observable<any> {
    // create new subject for the action
    this.actionRegistry.set(id, new Subject());

    // add a shortcut if needed
    if (keys) {
      this.shortcutRegistry.set(this.prepareShortcutCode(keys), id); // todo check for duplicates
    }

    return this.actionRegistry.get(id).asObservable();
  }

  /**
   * Triggers an action in the actions registry from the given action id
   * @param id unique identifier of the action to be triggered
   */
  public trigger(id: string) {
    if (this.actionRegistry.has(id)) {
      this.actionRegistry.get(id).next();
    }
  }

  /**
   * Prepares shortcut code for a given combination of keys
   * @param keys combination of keys as array
   * @returns {string} shortcut code
   */
  private prepareShortcutCode(keys: string[]) {
    return keys.sort().join('+').toUpperCase();
  }

  /**
   * Create key array for a Keyboard event
   * @param event Keyboard event
   * @returns {Array}
   */
  private readKeyCodes(event: KeyboardEvent) {
    const keys = [];

    if (event.ctrlKey) {
      keys.push('ctrl');
    }
    if (event.altKey) {
      keys.push('alt');
    }
    if (event.shiftKey) {
      keys.push('shift');
    }
    keys.push(event.key);

    return keys;
  }

}
