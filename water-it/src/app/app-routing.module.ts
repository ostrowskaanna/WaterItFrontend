import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementPageComponent } from './components/management-components/management-page/management-page.component';
import { DashboardPageComponent } from './components/dashboard-components/dashboard-page/dashboard-page.component';
import { ManageDevicesPageComponent } from './components/manage-devices-components/manage-devices-page/manage-devices-page.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'management', component: ManagementPageComponent, children: [
    { path: '', component: ManageDevicesPageComponent, outlet: 'management-page' },
    { path: 'user-panel', component: UserPanelComponent, outlet: 'management-page'},
    { path: 'dashboard', component: DashboardPageComponent, outlet: 'management-page'},
    { path: 'devices', component: ManageDevicesPageComponent, outlet: 'management-page'}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
