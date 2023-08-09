import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewincidentComponent } from './components/newincident/newincident.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LayoutsModule } from './components/layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NewincidentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    LayoutsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    ToastrModule.forRoot({toastClass: 'toast toast-bootstrap-compatibility-fix'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
