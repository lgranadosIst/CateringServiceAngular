//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { PlatillosDisplayComponent } from './platillos/platillos-display/platillos-display.component';
import { PlatillosAddComponent } from './platillos/platillos-add/platillos-add.component';
import { ClientesAddComponent } from './clientes/clientes-add/clientes-add.component';
import { ClientesDisplayComponent } from './clientes/clientes-display/clientes-display.component';
import { HomeComponent } from './home/home.component';
//servicios
import { PlatillosService } from './platillos/platillos.service';
import { ClientesService } from './clientes/clientes.service';

@NgModule({
  declarations: [
    AppComponent,
    PlatillosComponent,
    ClientesComponent,
    AboutComponent,
    NavComponent,
    PlatillosDisplayComponent,
    PlatillosAddComponent,
    ClientesAddComponent,
    ClientesDisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PlatillosService,
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
