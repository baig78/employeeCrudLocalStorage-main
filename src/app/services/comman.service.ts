import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  themeSubject: Subject<any>;
  data: any;
  constructor() {
    this.data={
      name : ''
    };
    this.themeSubject = new Subject();
  }
  emitData(theme: string) {
    
    this.themeSubject.next(theme);
  }
  getThemeSubject():Observable<any> {
    return this.themeSubject;
  }
  setData(key: string, value:string) {
    
    this.data[key]=value;
  }
  getData(key:string){
    
    return this.data[key];
  }

}
