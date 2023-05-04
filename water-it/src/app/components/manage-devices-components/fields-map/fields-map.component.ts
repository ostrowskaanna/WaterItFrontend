import { Component, OnInit } from '@angular/core';
import { circle, latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-fields-map',
  templateUrl: './fields-map.component.html',
  styleUrls: ['./fields-map.component.css']
})
export class FieldsMapComponent implements OnInit {

  options = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', pane: 'overlayPane' })
    ],
    zoom: 11,
    center: latLng(50.061853, 19.936989),
};

  ngOnInit(): void {
  }

}
