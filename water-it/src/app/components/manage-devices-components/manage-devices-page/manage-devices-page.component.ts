import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FieldFormComponent } from '../field-form/field-form.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field.model';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-manage-devices-page',
  templateUrl: './manage-devices-page.component.html',
  styleUrls: ['./manage-devices-page.component.css']
})
export class ManageDevicesPageComponent implements OnInit {

  userFields$!: Observable<Field[]> | undefined;
  selectedFieldId$!: Observable<number | undefined>;

  constructor(private dialog: MatDialog, private http: HttpClient, private selectionService: SelectionService) { }

  ngOnInit(): void { 
    this.getUserFields();

    // to działa z jakimś opóźnieniem - checkobx na liście nie zmienia się w momencie gdy klikam pole na mapce
    this.selectedFieldId$ = this.selectionService.getSelectedFieldId();
  }

  getUserFields(): void {
    this.userFields$ = this.http.get<Field[]>(environment.apiUrl + 'fields');
    this.http.get<Field[]>(environment.apiUrl + 'fields').subscribe(
      response => {
        console.log(response);
      }
    )
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
    this.selectionService.setSelectedFieldId(fieldId);
  }

}
