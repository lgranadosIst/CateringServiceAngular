import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PlatillosComponent } from './platillos/platillos.component';

const routes: Routes = [
	{ 
        path: '',  
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'clientes',
        component: ClientesComponent
    },
    {
        path: 'platillos',
        component: PlatillosComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
