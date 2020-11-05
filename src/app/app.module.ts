import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListarPersonaComponent } from './Components/Persona/listar-persona/listar-persona.component';
import { AddPersonaComponent } from './Components/Persona/add-persona/add-persona.component';
import { UpdatePersonaComponent } from './Components/Persona/update-persona/update-persona.component';
import { PersonaService } from './services/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ListarPersonaComponent,
    AddPersonaComponent,
    UpdatePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
