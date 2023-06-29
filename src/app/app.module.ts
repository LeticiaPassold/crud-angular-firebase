import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { enviroment }  from '../enviroment';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({

  declarations: [

    AppComponent,

    AddContatoComponent,

    EditContatoComponent,

    ListContatoComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(enviroment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule,

    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule, // required animations module

    ToastrModule.forRoot(), // ToastrModule added

    NgxPaginationModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
