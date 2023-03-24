import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastComponent } from './components/dashboardComponents/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPageComponent } from './components/dashboardComponents/dashboard-page/dashboard-page.component';
import { TempPipe } from './pipes/temp.pipe';
import { SideNavbarComponent } from './components/dashboardComponents/side-navbar/side-navbar.component';
import { TopNavbarComponent } from './components/dashboardComponents/top-navbar/top-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { PercentagePipe } from './pipes/percentage.pipe';
import { WindPipe } from './pipes/wind.pipe';
import { RainPipe } from './pipes/rain.pipe';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HumidityPreviewComponent } from './components/dashboardComponents/sensors-preview-components/humidity-preview/humidity-preview.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
