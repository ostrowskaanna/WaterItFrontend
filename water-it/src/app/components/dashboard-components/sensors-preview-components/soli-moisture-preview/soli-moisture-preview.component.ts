import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/models/chart-options.model';

@Component({
  selector: 'app-soli-moisture-preview',
  templateUrl: './soli-moisture-preview.component.html',
  styleUrls: ['./soli-moisture-preview.component.css']
})
export class SoliMoisturePreviewComponent implements OnChanges {

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
        colors: "#10C75B"
      },
      labels: ["Soil Moisture"]
    };
   }

   ngOnChanges(changes: SimpleChanges) {
    if(changes.data && this.data) {
      this.chartOptions.series = [Math.round(this.data.moistureHumidity * 100)]
    }
  }

}
