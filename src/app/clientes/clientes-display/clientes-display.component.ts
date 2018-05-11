import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes-display',
  templateUrl: './clientes-display.component.html',
  styleUrls: ['./clientes-display.component.css']
})
export class ClientesDisplayComponent implements OnInit {

	@Input() cliente: Cliente;
	@Output() borrarCliente = new EventEmitter<Cliente>();
	@Output() editarCliente = new EventEmitter<Cliente>();
	public isDeleting = false;

	constructor(private clientesService:ClientesService) { }

	ngOnInit() {
		
	}

	borrar(){
		this.isDeleting = true;
		this.borrarCliente.emit(this.cliente);
	}


	editar(){
		this.editarCliente.emit(this.cliente);
	}
}
