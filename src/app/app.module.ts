import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; //Sidenav
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './components/views/home/home.component'; //list que irá aparecer no sidenav
import {MatCardModule} from '@angular/material/card';
import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { ReceituarioCreateComponent } from './components/views/receituario/receituario-create/receituario-create.component';
import { FormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';
import {MatTableModule} from '@angular/material/table';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PacienteCreateComponent,
    ReceituarioCreateComponent,
    PacienteReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
