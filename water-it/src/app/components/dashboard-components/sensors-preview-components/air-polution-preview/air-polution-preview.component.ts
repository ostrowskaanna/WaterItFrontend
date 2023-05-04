import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-air-polution-preview',
  templateUrl: './air-polution-preview.component.html',
  styleUrls: ['./air-polution-preview.component.css']
})
export class AirPolutionPreviewComponent implements OnChanges {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<any>;
  @Input() data: any;

  constructor() { 
    this.chartOptions = {
      series: [0],
      chart: {
        height: 250,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%"
          }
        }
      },
      fill: {
        type: "solid",
        colors: "#333333"
      },
      labels: ["Air polution"]
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data && this.data) {
      this.chartOptions.series = [this.data.airPurity]
    }
  }

}
