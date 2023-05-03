import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-preview',
  templateUrl: './temperature-preview.component.html',
  styleUrls: ['./temperature-preview.component.css']
})
export class TemperaturePreviewComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
