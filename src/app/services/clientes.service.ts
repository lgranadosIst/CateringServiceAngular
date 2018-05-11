import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { DataService } from '../services/data.service';

@Injectable()
export class ClientesService {
  
  //Mongodb:
  constructor(private dataService:DataService) { }

  public obtenerClientes(){
    return this.dataService.get('/api/clientes');
  }

  public agregarCliente(cliente:Cliente){
    return this.dataService.post('/api/clientes',{'cliente':cliente});
  }

  public borrarCliente(cliente:Cliente){
    return this.dataService.delete('/api/clientes/'+cliente._id);
  }

  public editarCliente(cliente:Cliente){
    return this.dataService.put('/api/clientes/'+cliente._id,{'cliente':cliente});
  }
  

  /*
  //memoria:
  constructor() { }

  public clientes: Cliente[] = [
  	{
      _id: 1,
    	nombre: 'Luis',
    	apellidos: 'Granados',
    	telefono : '61405588',
    	direccion: 'San Rafael de Heredia, frente a la Pops.',
    	correo: 'lgranados@isthmusit.com'
  	},
  	{
  		_id: 2,
  		nombre: 'Ronald',
  		apellidos: 'Lobo',
  		telefono: '88888888',
  		direccion: 'San Pablo de Heredia, calle 8, av.6',
  		correo: 'rlobo@gmail.com'
  	},
  	{
  		_id: 3,
  		nombre: 'Alejandro',
  		apellidos: 'Fernandez',
  		telefono: '66666666',
  		direccion: 'Heredia Centro frente a la UNA',
  		correo: 'afernandez@gmail.com'
  	},
  	{
      _id: 4,
    	nombre: 'Ana',
    	apellidos: 'Castro',
    	telefono: '22222222',
    	direccion: 'Mercedes Norte de Heredia, calle 3, av.5',
    	correo: 'acastro@gmail.com'
  	},
  	{
  		_id: 5,
  		nombre: 'Erika',
  		apellidos: 'Castillo',
  		telefono: '61405588',
  		direccion: 'San Isidro de Heredia, calle princ. av.1',
  		correo: 'ecastillo@gmail.com'
  	}
  ];

	public obtenerClientes(){
		return this.clientes;
	}

	public agregarCliente(cliente:Cliente){
    cliente._id = this.generarId();
    this.clientes.push(cliente);
	}

  public borrarCliente(cliente:Cliente){
    this.clientes = this.clientes.filter(item => item !== cliente);
  }

	public editarCliente(cliente:Cliente){
		this.clientes = this.clientes.map(function(item) { return item._id === cliente._id ? Object.assign({},cliente) : item; });
	}

  private generarId(){
    return Math.floor((Math.random() * 100) + 1);
  }
  */
}
