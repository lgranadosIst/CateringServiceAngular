import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { patternValidator } from '../../shared/pattern-validator';

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.css']
})
export class ClienteAgregarComponent implements OnInit {
	@Output() agregarCliente = new EventEmitter<any>();
	@Output() editarCliente = new EventEmitter<any>();
	public clienteForm: FormGroup;
	@Input() canAdd : boolean = true;
	@Input('selectedCliente') cliente: Cliente = new Cliente();
	public submitted: boolean = false;
	public isEditing: boolean = false;


	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.clienteForm = this.formBuilder.group({
			_id: new FormControl(undefined),
			nombre: new FormControl('', [
				Validators.required, 
				Validators.minLength(3), 
				Validators.maxLength(50)
			]),
			apellidos: new FormControl('', [
				Validators.required,
				Validators.minLength(5), 
				Validators.maxLength(100)
			]),
			telefono: new FormControl('', [
				Validators.required, 
				patternValidator(/^[0-9]{8}$/i)
			]),
			direccion: new FormControl('', [
				Validators.required, 
				Validators.maxLength(500)
			]),
			correo: new FormControl('', [
				Validators.required,
				Validators.maxLength(50),
				patternValidator(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
			])
		});
	}

	onSubmit() {
		if(this.isEditing){
			this.editarCliente.emit({cliente:this.clienteForm.value,form:this.clienteForm});
			this.isEditing = false;
		} else {
			this.agregarCliente.emit({cliente:this.clienteForm.value,form:this.clienteForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.cliente && changes.cliente.currentValue.nombre){
			console.log('is editing');
			if(changes.cliente.currentValue.__v !== undefined) {
				delete changes.cliente.currentValue.__v;
			}
			this.clienteForm.setValue(changes.cliente.currentValue);
			this.isEditing = true;
		}
	}

	revert(){
		this.clienteForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}
}
