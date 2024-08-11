import { Component } from '@angular/core';
import { AppDataService } from './core/app-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public subject: string = '';
  public subjectMessage$!: Observable<string>

  constructor(private appDataService: AppDataService) {
    this.subjectMessage$ = this.appDataService.messageSubject;
  }

  updateSubject() {
    this.appDataService.editMessageSubject = this.subject;
  }
}