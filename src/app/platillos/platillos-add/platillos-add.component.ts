import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../platillo.model';

@Component({
  selector: 'app-platillos-add',
  templateUrl: './platillos-add.component.html',
  styleUrls: ['./platillos-add.component.css']
})
export class PlatillosAddComponent implements OnInit {
	@Input() platilloInput: Platillo;
	@Output() insertedPlatillo: EventEmitter<Platillo> = new EventEmitter<Platillo>();
	@Output() updatededPlatillo: EventEmitter<Platillo> = new EventEmitter<Platillo>();
	@Output() deletededPlatillo: EventEmitter<Platillo> = new EventEmitter<Platillo>();

	public platilloAddId: number;
	public platilloAddNombre: string = '';
	public platilloAddDescripcion: string = '';
	public platilloAddPrecio: number;

	public descripcionDisabled: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	public insertPlatillo(){
		let platillo = new Platillo();
		platillo.nombre = this.platilloAddNombre;// || 'Casado del dia';
		platillo.descripcion = this.platilloAddDescripcion;// || 'Incluye picadillo, ensalada, plato fuerte y refresco.';
		platillo.precio = this.platilloAddPrecio;// || 2000;
		
		this.insertedPlatillo.emit(platillo);
		this.cleanHtmlData();
	}

	public updatePlatillo(updPlatillo:Platillo){
		let platillo = new Platillo();
		platillo.id = updPlatillo.id;
		platillo.nombre = updPlatillo.nombre;
		platillo.descripcion = updPlatillo.descripcion;
		platillo.precio = updPlatillo.precio;

		this.updatededPlatillo.emit(platillo);
		this.cleanHtmlData();
	}

	public deletePlatillo(delPlatillo:Platillo){
		let platillo = new Platillo();
		platillo.id = delPlatillo.id;
		platillo.nombre = delPlatillo.nombre;
		platillo.descripcion = delPlatillo.descripcion;
		platillo.precio = delPlatillo.precio;

		this.deletededPlatillo.emit(platillo);
		this.cleanHtmlData();
	}
	
	public loadedPlatillo(inputPlatillo:Platillo){
		this.platilloAddId = inputPlatillo.id;
		this.platilloAddNombre = inputPlatillo.nombre;
		this.platilloAddDescripcion = inputPlatillo.descripcion;
		this.platilloAddPrecio = inputPlatillo.precio;
	}
	

	public cleanHtmlData(){
		this.platilloAddNombre = '';
		this.platilloAddDescripcion = '';
		this.platilloAddPrecio = 0;
	}

	public toogleDescripcion(){
		this.descripcionDisabled = !this.descripcionDisabled;
	}

}
