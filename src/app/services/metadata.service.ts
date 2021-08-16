import { EventEmitter, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  public title$ = new EventEmitter<string>();
  public lastTitle = "";

  constructor(private router: Router) { 
    this.router.events.subscribe((x)=>{
      if(x instanceof NavigationStart) {
        this.title$.next(this.lastTitle);
    }});
  }

  public setTitle(value: string) {
    if(value !== this.lastTitle) {
      this.title$.next(value);
      this.lastTitle = value;
      return value
    } else {
      this.title$.next(this.lastTitle)
      return this.lastTitle;
    }
  }
}
