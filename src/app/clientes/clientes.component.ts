import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @Output() loadedCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(private clientesService:ClientesService) {
  }

  ngOnInit() {
  }

  public insertedCliente(elcliente:Cliente){
    this.clientesService.addCliente(elcliente);
  }

  public updatededCliente(elcliente:Cliente){
    this.clientesService.editCliente(elcliente);
  }

  public deletededCliente(elcliente:Cliente){
    this.clientesService.removeCliente(elcliente);
  }

  public loadedClientetoHtml(elcliente:Cliente){
    this.loadedCliente.emit(elcliente);
    alert(elcliente.nombre +' '+ elcliente.apellidos);
  }

}
