import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-rain-preview',
  templateUrl: './rain-preview.component.html',
  styleUrls: ['./rain-preview.component.css']
})
export class RainPreviewComponent implements OnInit {

  @Input() data: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
