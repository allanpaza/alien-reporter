import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ReportingService } from '../shared/reporting.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css'],
})
export class ReportingComponent {

  @Input() data; // this var will receive the data from app.component
  @Input() error; // this var will receive the error, if there any, from app.component

  drop(event: CdkDragDrop<string[]>) { // drag and drop event
    moveItemInArray(this.data.form, event.previousIndex, event.currentIndex);
  }
}
