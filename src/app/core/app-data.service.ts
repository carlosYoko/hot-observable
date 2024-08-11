import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private message: BehaviorSubject<string> = new BehaviorSubject<string>('Hello World!')

  constructor() { }

  get messageSubject(): Observable<string> {
    return this.message.asObservable();
  }

  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }
}