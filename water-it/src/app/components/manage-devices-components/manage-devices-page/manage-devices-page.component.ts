import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FieldFormComponent } from '../field-form/field-form.component';
import { DeviceFormComponent } from '../device-form/device-form.component';

@Component({
  selector: 'app-manage-devices-page',
  templateUrl: './manage-devices-page.component.html',
  styleUrls: ['./manage-devices-page.component.css']
})
export class ManageDevicesPageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(buttonType: number) {
    let componentToOpen: any;

    if (buttonType == 0) {
      componentToOpen = FieldFormComponent;
    } 
    else if (buttonType == 1) {
      componentToOpen = DeviceFormComponent;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(componentToOpen, {
      width: '40vw',
      height: '70vh'
    });
  }

}
