import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TempPipe } from './pipes/temp.pipe';
import { SideNavbarComponent } from './components/management-components/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/management-components/top-navbar/top-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { PercentagePipe } from './pipes/percentage.pipe';
import { WindPipe } from './pipes/wind.pipe';
import { RainPipe } from './pipes/rain.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { ManagementPageComponent } from './components/management-components/management-page/management-page.component'
import { WeatherForecastComponent } from './components/dashboard-components/weather-forecast/weather-forecast.component';
import { DashboardPageComponent } from './components/dashboard-components/dashboard-page/dashboard-page.component';
import { AirPolutionPreviewComponent } from './components/dashboard-components/sensors-preview-components/air-polution-preview/air-polution-preview.component';
import { HumidityPreviewComponent } from './components/dashboard-components/sensors-preview-components/humidity-preview/humidity-preview.component';
import { LuxPreviewComponent } from './components/dashboard-components/sensors-preview-components/lux-preview/lux-preview.component';
import { RainPreviewComponent } from './components/dashboard-components/sensors-preview-components/rain-preview/rain-preview.component';
import { SoliMoisturePreviewComponent } from './components/dashboard-components/sensors-preview-components/soli-moisture-preview/soli-moisture-preview.component';
import { TemperaturePreviewComponent } from './components/dashboard-components/sensors-preview-components/temperature-preview/temperature-preview.component';
import { ManageDevicesPageComponent } from './components/manage-devices-components/manage-devices-page/manage-devices-page.component';
import { FieldsMapComponent } from './components/manage-devices-components/fields-map/fields-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    WeatherForecastComponent,
    DashboardPageComponent,
    TempPipe,
    SideNavbarComponent,
    TopNavbarComponent,
    PercentagePipe,
    WindPipe,
    RainPipe,
    HumidityPreviewComponent,
    SoliMoisturePreviewComponent,
    TemperaturePreviewComponent,
    LuxPreviewComponent,
    AirPolutionPreviewComponent,
    RainPreviewComponent,
    ManagementPageComponent,
    ManageDevicesPageComponent,
    FieldsMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    NgApexchartsModule,
    MatFormFieldModule,
    LeafletModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
