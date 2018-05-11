import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Platillo } from '../../models/platillo';
import { PlatillosService } from '../../services/platillos.service';
import { patternValidator } from '../../shared/pattern-validator';

@Component({
  selector: 'app-platillo-agregar',
  templateUrl: './platillo-agregar.component.html',
  styleUrls: ['./platillo-agregar.component.css']
})
export class PlatilloAgregarComponent implements OnInit, OnChanges {
	@Output() agregarPlatillo = new EventEmitter<any>();
	@Output() editarPlatillo = new EventEmitter<any>();
	public platilloForm: FormGroup;
	@Input() canAdd : boolean = true;
	@Input('selectedPlatillo') platillo: Platillo = new Platillo();
	public submitted: boolean = false;
	public isEditing: boolean = false;
	//requiredText : string = 'platillo';

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.platilloForm = this.formBuilder.group({
			_id: new FormControl(undefined),
			nombre: new FormControl('', [
				Validators.required, 
				Validators.minLength(5), 
				Validators.maxLength(50)
			]),
			descripcion: new FormControl('', [
				Validators.required, 
				Validators.maxLength(500)
			]),
			precio: new FormControl('', [
				Validators.required,
				Validators.min(0)
			])
		});
	}

	onSubmit() {
		if(this.isEditing){
			this.editarPlatillo.emit({platillo:this.platilloForm.value,form:this.platilloForm});
			this.isEditing = false;
		} else {
			this.agregarPlatillo.emit({platillo:this.platilloForm.value,form:this.platilloForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.platillo && changes.platillo.currentValue.nombre){
			console.log('is editing');
			if(changes.platillo.currentValue.__v !== undefined) {
				delete changes.platillo.currentValue.__v;
			}
			this.platilloForm.setValue(changes.platillo.currentValue);
			this.isEditing = true;
		}
	}

	revert(){
		this.platilloForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}

}
