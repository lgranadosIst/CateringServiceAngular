import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PlatillosComponent } from './platillos/platillos.component';

export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'platillos',  
        component: PlatillosComponent
    },
    { 
        path: 'clientes',  
        component: ClientesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }