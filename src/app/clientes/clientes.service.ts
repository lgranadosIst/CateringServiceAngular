import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable()
export class ClientesService {
    public cliente = new Cliente();
		public clientes: Cliente[] = [
      	{
    		  id: 1,
    	  	nombre: 'Luis',
        	apellidos: 'Granados',
        	telefono : '61405588',
        	direccion: 'San Rafael de Heredia, frente a la Pops.',
        	correo: 'lgranados@isthmusit.com'
      	},
      	{
      		id: 2,
  				nombre: 'Ronald',
  				apellidos: 'Lobo',
  				telefono: '88888888',
  				direccion: 'San Pablo de Heredia, calle 8, av.6',
  				correo: 'rlobo@gmail.com'
      	},
      	{
      		id: 3,
  				nombre: 'Alejandro',
  				apellidos: 'Fernandez',
  				telefono: '66666666',
  				direccion: 'Heredia Centro frente a la UNA',
  				correo: 'afernandez@gmail.com'
      	},
      	{
  				id: 4,
  				nombre: 'Ana',
  				apellidos: 'Castro',
  				telefono: '22222222',
  				direccion: 'Mercedes Norte de Heredia, calle 3, av.5',
  				correo: 'acastro@gmail.com'
  			},
  			{
  				id: 5,
  				nombre: 'Erika',
  				apellidos: 'Castillo',
  				telefono: '61405588',
  				direccion: 'San Isidro de Heredia, calle princ. av.1',
  				correo: 'ecastillo@gmail.com'
  			}
      ];

  		constructor() { }

  		  public getClientes(){
      		return this.clientes;
      	}

      	public addCliente(newCliente:Cliente){
          
          if(newCliente.id > 0){
            this.editCliente(newCliente);
          }
          else{
            if(newCliente.nombre != '' && newCliente.apellidos != ''){
              var newId = 0;
              var cliTemp = new Cliente();

              for (let i = 0; i < this.clientes.length; i++) {
                cliTemp = this.clientes[i];

                if(cliTemp.id > newId)
                {
                  newId = cliTemp.id;
                }
              }

              newCliente.id = newId + 1;

          		this.clientes.push(newCliente);
            }
          }
      	}

      	public editCliente(updCliente:Cliente){

          for (let i = 0; i < this.clientes.length; i++) {

              if(updCliente.id == this.clientes[i].id){
                this.clientes[i] = updCliente
              }
          }
      	}

        public removeCliente(cliente:Cliente){
          this.clientes = this.clientes.filter(item => item !== cliente);
        }

        public getCliente(){
          return this.cliente;
        }

        public setCliente(elCliente:Cliente){
          this.cliente = elCliente;
        }

}
