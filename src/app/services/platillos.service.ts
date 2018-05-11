import { Injectable } from '@angular/core';
import { Platillo } from '../models/platillo';
import { DataService } from '../services/data.service';

@Injectable()
export class PlatillosService {
  
  //mogodb:
  constructor(private dataService:DataService) { }

  public obtenerPlatillos(){
    return this.dataService.get('/api/platillos');
  }

  public agregarPlatillo(platillo:Platillo){
    return this.dataService.post('/api/platillos',{'platillo':platillo});
  }

  public borrarPlatillo(platillo:Platillo){
    return this.dataService.delete('/api/platillos/'+platillo._id);
  }

  public editarPlatillo(platillo:Platillo){
    return this.dataService.put('/api/platillos/'+platillo._id,{'platillo':platillo});
  }
  

  /*
  //memoria
  constructor() { }

	public platillos: Platillo[] = [
    {
		  _id: 1,
			nombre: 'Arroz Cantones',
			descripcion: 'Incluye patacones, frijoles molidos, platanos maduros y refresco natural.',
			precio: 3500,
			nombreImg: 'arroz-cantones.jpg'
  	},
  	{
  		_id: 2,
			nombre: 'Pastel de Pollo',
			descripcion: 'Incluye verduras sudadas, postre y refresco natural.',
			precio: 2500,
			nombreImg: 'pastel-pollo.jpg'
  	},
  	{
  		_id: 3,
			nombre: 'Lasagña de Pollo',
			descripcion: 'Incluye pan, ensalada y refresco.',
			precio: 3000,
			nombreImg: 'lasagna-pollo.jpg'
  	},
  	{
  		_id: 4,
			nombre: 'Canelones de Pollo o Carne',
			descripcion: 'Incluye pan, arroz, frijoles, ensalada y refresco.',
			precio: 3000,
			nombreImg: 'canelones.jpg'
  	},
  	{
  		_id: 5,
			nombre: 'Filet de Pescado al Ajillo',
			descripcion: 'Incluye arroz, ensalada y refresco.',
			precio: 3000,
			nombreImg: 'filet-pescado.jpg'
  	}
  ];

  

  public obtenerPlatillos(){
  		return this.platillos;
  }

  public agregarPlatillo(platillo:Platillo){
    platillo._id = this.generarId();
    this.platillos.push(platillo);
  }

  public borrarPlatillo(platillo:Platillo){
    this.platillos = this.platillos.filter(item => item !== platillo);
  }

  public editarPlatillo(platillo:Platillo){
  	this.platillos = this.platillos.map(function(item) { return item._id === platillo._id ? Object.assign({},platillo) : item; });
  }

  private generarId(){
    return Math.floor((Math.random() * 100) + 1);
  }
  */
}
