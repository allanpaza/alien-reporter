import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { // setting the headers
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  private dataUrl = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e'; // JSON endpoint

  constructor(private http: HttpClient) { } // http initilization

  getData() { // getting data from the link provided
    return this.http.get<any>(this.dataUrl, httpOptions);
  }
}
