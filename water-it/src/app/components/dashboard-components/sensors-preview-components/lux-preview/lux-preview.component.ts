import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-lux-preview',
  templateUrl: './lux-preview.component.html',
  styleUrls: ['./lux-preview.component.css']
})
export class LuxPreviewComponent implements OnChanges {

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
        colors: "#eeff00"
      },
      labels: ["Sun Level"],
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data && this.data) {
      console.log(this.data)
      this.chartOptions.series = [this.data.lightIntensity]
    }
  }

}
