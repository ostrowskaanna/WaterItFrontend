import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Measurments } from 'src/app/models/measurments.model';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  measurments$!: Observable<Measurments> | undefined;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getMeasurements();
  }

  getMeasurements(): void {
    this.measurments$ = this.http.get<Measurments>(environment.apiUrl + `measurement/latest/${this.authService.selectedFieldId}`);
  }

}
