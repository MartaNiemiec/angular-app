import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningAlert/warningAlert.component';
import { SuccessAlert } from './successAlert/successAlert.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    AssigmentComponent,
    Assignment3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
