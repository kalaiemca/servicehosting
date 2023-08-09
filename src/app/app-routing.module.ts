import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewincidentComponent } from './components/newincident/newincident.component';
import { SearchincidentComponent } from './components/searchincident/searchincident.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserlistingComponent } from './authentication/userlisting/userlisting.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: '',redirectTo:"components/layouts", component: LayoutsComponent, 
  children: [{ path: '', component: LoginComponent },
   { path: 'userlist', component: UserlistingComponent }, 
   { path: 'registeruser', component: RegisterComponent },
   { path: 'viewincident', component: SearchincidentComponent }, 
   { path: 'dashboard', component: DashboardComponent }, 
   { path: 'newincident', component: NewincidentComponent }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
