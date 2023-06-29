import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Field } from 'src/app/models/field.model';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css']
})
export class FieldFormComponent implements OnInit {

  newFieldForm = new FormGroup({
    name: new FormControl('', Validators.required),
    latitude: new FormControl(''),
    longitude: new FormControl(''), 
    actualCropType: new FormControl('', Validators.required),
    addDeviceRequest: new FormGroup({
      externalDeviceId: new FormControl('', Validators.required)
    })
  });

  cropTypes: any[] =[];
  loadingView: boolean = false;
  success: boolean = false;
  error: boolean = false;

  @Inject(MAT_DIALOG_DATA) public data: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getCropTypes();
  }

  getCropTypes(): void {
    this.http.get<any>(environment.apiUrl + 'fields/crop-type').subscribe(
      (response) => {
        this.cropTypes = response.cropTypes;
      }, 
      (error) => {
        console.error(error);
      });
  }

  onSubmit() {
    this.loadingView = true;
    const formData = this.newFieldForm.getRawValue();
    console.log(formData);
    // post new field
    this.http.post(environment.apiUrl + 'fields', formData).subscribe(
      (response) => {
        console.log(response);
        // get fields to check if field added and device active
        this.http.get<Field[]>(environment.apiUrl + 'fields').subscribe(
          response => {
            if (response[response.length - 1].device.active == true) {
              this.success = true;
              this.error = false;
            }
            else {
              this.success = false;
              this.error = true;
            }
          }
        )
        this.loadingView = false;
      },
      (error) => {
        console.error(error);
        this.loadingView = false;
        this.success = false;
        this.error = true;
      });
  }
}
