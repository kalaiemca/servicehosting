import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import { SearchincidentComponent } from '../searchincident/searchincident.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from 'src/app/authentication/register/register.component';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { UserlistingComponent } from 'src/app/authentication/userlisting/userlisting.component';
import { UpdatepopupComponent } from 'src/app/authentication/updatepopup/updatepopup.component';
import {MatRadioModule} from "@angular/material/radio";
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"

@NgModule({
  declarations: [
    LayoutsComponent,
    DashboardComponent,
    PostsComponent,
    SearchincidentComponent,
    RegisterComponent,
    LoginComponent,
    UserlistingComponent,
    UpdatepopupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDividerModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class LayoutsModule { }
