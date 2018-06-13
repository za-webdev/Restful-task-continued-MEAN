import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{NewService} from './new.service';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
