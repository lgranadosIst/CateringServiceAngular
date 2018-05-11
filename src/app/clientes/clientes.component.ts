import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {
  public clientes : Cliente[];
  public selectedCliente : Cliente = new Cliente();
  public loading : boolean = false;

  constructor(private clientesService:ClientesService) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  //--------------------------------------------------------------------
  
  //mongodb:
  public editarCliente(cliente){
    console.log('edit',cliente);
    this.selectedCliente = Object.assign({}, cliente);
  }

  public editarClienteSave(cliente){
    this.clientesService.editarCliente(cliente.cliente)
      .then(data => {
        cliente.form.reset();
        this.obtenerClientes();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  public borrarCliente(cliente){
    this.clientesService.borrarCliente(cliente)
      .then(data => {
        this.obtenerClientes();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  public obtenerClientes(){
    this.clientesService.obtenerClientes().subscribe((data) => {
        console.log('data',data);
        this.clientes = data.cliente;
      },(error)=>{
        console.log('error',error);
      });
  }

  public agregarCliente(cliente:any){
    this.loading = true;
    delete cliente.cliente._id;
    this.clientesService.agregarCliente(cliente.cliente)
      .then(data => {
        console.log('cliente agregado');
        cliente.form.reset();
        this.loading = false;
        this.obtenerClientes();
      })
      .catch(error => {
        console.log('error',error);
        this.loading = false;
        alert('El cliente seleccionado ya existe, por favor seleccione otro');
      });
  }
  

  /*
  //memoria:
  public editarCliente(cliente:Cliente){
    console.log('edit',cliente);
    this.selectedCliente = Object.assign({}, cliente);
  }

  public editarClienteSave(cliente){
    this.clientesService.editarCliente(cliente);
    cliente.form.reset();
    this.obtenerClientes();
  }

  public borrarCliente(cliente:Cliente){
    this.clientesService.borrarCliente(cliente);
    this.obtenerClientes();
  }

  public agregarCliente(cliente:Cliente){
    this.clientesService.agregarCliente(cliente);
    console.log('cliente agregado');
    //cliente.form.reset();
    this.loading = false;
    this.obtenerClientes();
  }

  public obtenerClientes(){
    this.clientes = this.clientesService.obtenerClientes();
    console.log('clientes',this.clientes);
  }
  */

  ngAfterViewInit(){
    console.timeEnd();
  }
}
