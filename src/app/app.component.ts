import { Component, OnInit } from '@angular/core';
import { ReportingService } from './shared/reporting.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data;
  public error;

  constructor(private service: ReportingService) { } // service initialization

  ngOnInit() {
    this.error = new Array(); // array initializing
    this.data = new Array(); // array initializing
    this.service.getData().toPromise() // getting data using the service
      .then(
        result => { // if everything is ok populate the data
          this.data = result;
        },
        (error: HttpErrorResponse) => { // get the error
          this.error.push(error.message);
        }
      );
  }
}
