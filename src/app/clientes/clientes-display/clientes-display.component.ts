import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes-display',
  templateUrl: './clientes-display.component.html',
  styleUrls: ['./clientes-display.component.css']
})
export class ClientesDisplayComponent implements OnInit {

	@Input() cliente: Cliente;

	constructor() { }

	ngOnInit() {
	}
	
}
