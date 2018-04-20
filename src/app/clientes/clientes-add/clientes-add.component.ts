import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent implements OnInit {
	@Input() clienteInput: Cliente;
	@Output() insertedCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();
	@Output() updatededCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();
	@Output() deletededCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();

	public clienteAddId: number;
	public clienteAddNombre: string = '';
	public clienteAddApellidos: string = '';
	public clienteAddTelefono: string = '';
	public clienteAddCorreo: string = '';
	public clienteAddDireccion: string = '';

	public direccionDisabled: boolean = true;

	
	constructor() { 
	}

	

  	public insertCliente(){
		let cliente = new Cliente();
		cliente.nombre = this.clienteAddNombre;// || 'Luis';
		cliente.apellidos = this.clienteAddApellidos;// || 'Granados';
		cliente.telefono = this.clienteAddTelefono;// || '61405588';
		cliente.correo = this.clienteAddCorreo;// || 'lgranados@isthmusit.com';
		cliente.direccion = this.clienteAddDireccion;// || 'San Rafael de Heredia.';
		
		this.insertedCliente.emit(cliente);
		this.cleanHtmlData();
	}

	public updateCliente(updCliente:Cliente){
		let cliente = new Cliente();
		cliente.id = updCliente.id;
		cliente.nombre = updCliente.nombre;
		cliente.apellidos = updCliente.apellidos;
		cliente.telefono = updCliente.telefono;
		cliente.correo = updCliente.correo;
		cliente.direccion = updCliente.direccion;

		this.updatededCliente.emit(cliente);
		this.cleanHtmlData();
	}

	public deleteCliente(delCliente:Cliente){
		let cliente = new Cliente();
		cliente.id = delCliente.id;
		cliente.nombre = delCliente.nombre;
		cliente.apellidos = delCliente.apellidos;
		cliente.telefono = delCliente.telefono;
		cliente.correo = delCliente.correo;
		cliente.direccion = delCliente.direccion;

		this.deletededCliente.emit(cliente);
		this.cleanHtmlData();
	}
	
	public loadCliente(inputCliente:Cliente){

		this.clienteAddId = inputCliente.id;
		this.clienteAddNombre = inputCliente.nombre;
		this.clienteAddApellidos = inputCliente.apellidos;
		this.clienteAddTelefono = inputCliente.telefono;
		this.clienteAddCorreo = inputCliente.correo;
		this.clienteAddDireccion = inputCliente.direccion;
	}
	

	public cleanHtmlData(){
		this.clienteAddNombre = '';
		this.clienteAddApellidos = '';
		this.clienteAddTelefono = '';
		this.clienteAddCorreo = '';
		this.clienteAddDireccion = '';
	}

	public toogleDireccion(){
		this.direccionDisabled = !this.direccionDisabled;
	}

	ngOnInit() {
		
	}
}
