import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-preview',
  templateUrl: './temperature-preview.component.html',
  styleUrls: ['./temperature-preview.component.css']
})
export class TemperaturePreviewComponent implements OnInit {

  temperature: number = 21.2;

  constructor() { }

  ngOnInit(): void {
  }

}
