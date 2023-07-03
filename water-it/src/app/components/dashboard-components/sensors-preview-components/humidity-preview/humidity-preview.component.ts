import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/models/chart-options.model';
import { Measurments } from 'src/app/models/measurments.model';

@Component({
  selector: 'app-humidity-preview',
  templateUrl: './humidity-preview.component.html',
  styleUrls: ['./humidity-preview.component.css']
})
export class HumidityPreviewComponent implements OnChanges {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<any>;
  @Input() data: any;

  constructor() {
    this.chartOptions = {
      series: [0],
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              offsetY: 40,
              show: true
            },
            value: {
              offsetY: -15,
              fontSize: "22px"
            }
          }
        }
      },
      fill: {
        type: "solid",
        colors: "#33B9DE"
      },
      labels: ["Air Humidity"]
    };
   }

   ngOnChanges(changes: SimpleChanges) {
    if(changes.data && this.data) {
      this.chartOptions.series = [Math.round(this.data.humidity * 100)]
    }
  }

}
