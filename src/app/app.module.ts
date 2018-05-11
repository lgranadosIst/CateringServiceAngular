//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//tiene las rutas: se debe agregar a los imports
import { AppRoutingModule } from './app.routes.module';

//componentes: deben ser agregados a los declarations
import { AppComponent } from './app.component';//--
import { AboutComponent } from './about/about.component';//--
import { HomeComponent } from './home/home.component';//--
import { NavComponent } from './nav/nav.component';//--

import { PlatillosComponent } from './platillos/platillos.component';//--
import { PlatillosDisplayComponent } from './platillos/platillos-display/platillos-display.component';//--
import { PlatilloAgregarComponent } from './platillos/platillo-agregar/platillo-agregar.component';//--

import { ClientesComponent } from './clientes/clientes.component';//--
import { ClientesDisplayComponent } from './clientes/clientes-display/clientes-display.component';//--
import { ClienteAgregarComponent } from './clientes/cliente-agregar/cliente-agregar.component';//--

//servicios: se deben ser agregados en los providers
import { PlatillosService } from './services/platillos.service';
import { ClientesService } from './services/clientes.service';
import { TextContainsValidator } from './shared/text-contains.directive';
import { TextStartsUpperValidator } from './shared/text-starts-uppercase';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,//--
    HomeComponent,//--
    AboutComponent,//--
    NavComponent,//--
    PlatillosComponent,//--
    PlatillosDisplayComponent,//--
    PlatilloAgregarComponent,//--
    ClientesComponent,//--
    ClientesDisplayComponent,//--
    ClienteAgregarComponent,//--
    TextContainsValidator,
    TextStartsUpperValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PlatillosService,
    ClientesService,
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
