import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FieldFormComponent } from '../field-form/field-form.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-manage-devices-page',
  templateUrl: './manage-devices-page.component.html',
  styleUrls: ['./manage-devices-page.component.css']
})
export class ManageDevicesPageComponent implements OnInit {

  userFields$!: Observable<Field[]> | undefined;
  selectedFieldId: number | undefined;

  constructor(private dialog: MatDialog, private authService: AuthService, private http: HttpClient) { }

  //testowo 
  testField0: Field = {
    id: 0,
    name: "test0",
    latitude: 0,
    longitude: 0,
    actualCropType: "potato",
    device: {
      id: 1,
      externalDeviceId: "dferfcrds",
      "active": true
    }
  }
  testField1: Field = {
    id: 1,
    name: "test1",
    latitude: -10,
    longitude: 10,
    actualCropType: "potato",
    device: {
      id: 1,
      externalDeviceId: "dferfcrds",
      "active": true
    }
  }

  ngOnInit(): void { 
    this.getUserFields();
  }

  getUserFields(): void {
    this.userFields$ = this.http.get<Field[]>(environment.apiUrl + 'fields');
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(FieldFormComponent, {
      width: '40vw',
      height: '70vh'
    });
  }

  selectField(fieldId: number): void {
    this.selectedFieldId = fieldId;
    console.log(this.selectedFieldId);
    this.authService.selectField(fieldId);
  }

}
