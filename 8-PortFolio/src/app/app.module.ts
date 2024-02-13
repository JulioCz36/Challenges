import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';
import { ProyectComponent } from './components/proyect/proyect.component';


@NgModule({
  declarations: [
    AppComponent,
    CardPerfilComponent,
    ProyectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
