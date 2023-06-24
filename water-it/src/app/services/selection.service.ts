
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import {marker } from 'leaflet';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectionService {

    private selectedFieldIdSubject: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
    selectedFieldId: number | undefined;

    constructor() {
        this.selectedFieldId = parseInt(localStorage.getItem('fieldId') || '');
        this.selectedFieldIdSubject.next(this.selectedFieldId);
    }

    setSelectedFieldId(fieldId: number): void {
        console.log("selected field id: " + this.selectedFieldId);
        console.log("selected now: " + fieldId);
      // deselect  
      if (fieldId == this.selectedFieldId) {
        console.log("deselect");
        this.selectedFieldIdSubject.next(undefined);
        this.selectedFieldId = undefined;
        localStorage.removeItem('fieldId');
      }
      // select
      else {
        console.log("select");
        this.selectedFieldIdSubject.next(fieldId);
        this.selectedFieldId = fieldId;
        localStorage.setItem('fieldId', fieldId.toString());
      }
    }
  
    getSelectedFieldId(): Observable<number | undefined> {
      return this.selectedFieldIdSubject.asObservable();
    }
}
