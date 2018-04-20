import { Injectable } from '@angular/core';
import { Platillo } from './platillo.model';

@Injectable()
export class PlatillosService {
		  public platillos: Platillo[] = [
        {
  				id: 1,
  				nombre: 'Arroz Cantones',
  				descripcion: 'Incluye patacones, frijoles molidos, platanos maduros y refresco natural.',
  				precio: 3500,
  				nombreImg: 'arroz-cantones.jpg'
      	},
      	{
      		id: 2,
  				nombre: 'Pastel de Pollo',
  				descripcion: 'Incluye verduras sudadas, postre y refresco natural.',
  				precio: 2500,
  				nombreImg: 'pastel-pollo.jpg'
      	},
      	{
      		id: 3,
  				nombre: 'Lasagña de Pollo',
  				descripcion: 'Incluye pan, ensalada y refresco.',
  				precio: 3000,
  				nombreImg: 'lasagna-pollo.jpg'
      	},
      	{
      		id: 4,
  				nombre: 'Canelones de Pollo o Carne',
  				descripcion: 'Incluye pan, arroz, frijoles, ensalada y refresco.',
  				precio: 3000,
  				nombreImg: 'canelones.jpg'
      	},
      	{
      		id: 5,
  				nombre: 'Filet de Pescado al Ajillo',
  				descripcion: 'Incluye arroz, ensalada y refresco.',
  				precio: 3000,
  				nombreImg: 'filet-pescado.jpg'
      	}
      ];
  		constructor() { }

  		public getPlatillos(){
      		return this.platillos;
      }

      public addPlatillo(newPlatillo:Platillo){
          
        if(newPlatillo.id > 0){
          this.editPlatillo(newPlatillo);
        }
        else{
          if(newPlatillo.nombre != '' && newPlatillo.precio > 0){
            var newId = 0;
            var platTemp = new Platillo();

            for (let i = 0; i < this.platillos.length; i++) {
              platTemp = this.platillos[i];

              if(platTemp.id > newId)
              {
                newId = platTemp.id;
              }
            }

            newPlatillo.id = newId + 1;

            this.platillos.push(newPlatillo);
          }
        }
      }

      public editPlatillo(platillo:Platillo){

        for (let i = 0; i < this.platillos.length; i++) {

            if(platillo.id == this.platillos[i].id){
              this.platillos[i] = platillo
            }
        }
      }

    	public removePlatillo(platillo:Platillo){
    		this.platillos = this.platillos.filter(item => item !== platillo);
    	}

}
																																																																																																																																																																																																																																																																																													