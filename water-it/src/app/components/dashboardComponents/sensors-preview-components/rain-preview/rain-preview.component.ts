import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-rain-preview',
  templateUrl: './rain-preview.component.html',
  styleUrls: ['./rain-preview.component.css']
})
export class RainPreviewComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<any>;

  constructor() { 
    this.chartOptions = {
      series: [37],
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
      labels: ["Rain "],
    };
  }

  ngOnInit(): void {
  }

}
