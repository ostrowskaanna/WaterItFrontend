import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

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

    // get this from db
  cropTypes: any[] =[];

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
    const formData = this.newFieldForm.getRawValue();
    console.log(formData);
    this.http.post(environment.apiUrl + 'fields', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      });
  }
}
