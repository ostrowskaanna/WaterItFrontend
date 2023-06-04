import { Component, OnInit } from '@angular/core';
import { circle, latLng, tileLayer, marker, icon, Map } from 'leaflet';
import { Observable } from 'rxjs';
import { SelectionService } from 'src/app/services/selection.service';

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

  map!: Map;
  private markers: { [key: number]: L.Marker } = {};
  fieldId: number | undefined;
  selectedFieldId$!: Observable<number | undefined>;

  constructor(private selectionService: SelectionService) {}

  ngOnInit(): void { 
    // w tą stronę działa dobrze - przy kliknięciu pola z listy robi update markerów
    this.selectionService.getSelectedFieldId().subscribe(id => {
      this.fieldId = id;
      this.updateMarkerSelection();
    });
    this.selectedFieldId$ = this.selectionService.getSelectedFieldId();
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.addMarkers();
  }

  // icons from https://github.com/pointhi/leaflet-color-markers

  greenIcon = icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  });

  blueIcon = icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  })

  // testowo na sztywno
  addMarkers() {
    const coordinates = [
      { lat: 50.061853, lng: 19.936989, id: 1 },
      { lat: 50.064381, lng: 19.944574, id: 2 }
    ];

    coordinates.forEach(coord => {
      let markerOptions = {
        icon: this.greenIcon
      };
      if (coord.id == this.fieldId) {
        markerOptions.icon = this.blueIcon;
      }
      const markerInstance = marker([coord.lat, coord.lng], markerOptions);
      markerInstance.options.title = coord.id.toString();
      markerInstance.addTo(this.map);
      markerInstance.on('click', (event: L.LeafletMouseEvent) => {
        this.onMarkerClick(event, markerInstance);
      });
      this.markers[coord.id] = markerInstance;
    });
  }

  onMarkerClick(event: L.LeafletMouseEvent, marker: L.Marker): void {
    this.fieldId = parseInt(marker.options.title!);
    this.selectionService.setSelectedFieldId(this.fieldId);
    this.updateMarkerSelection();
  }

  updateMarkerSelection(): void {
    for (const id in this.markers) {
      if (Object.prototype.hasOwnProperty.call(this.markers, id)) {
        const marker = this.markers[id];
        if (Number(id) === this.fieldId) {
          marker.setIcon(this.blueIcon);
        } else {
          marker.setIcon(this.greenIcon);
        }
      }
    }
  }

}


