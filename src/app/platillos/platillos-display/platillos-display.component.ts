import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Platillo } from '../../models/platillo';
import { PlatillosService } from '../../services/platillos.service';

@Component({
  selector: 'app-platillos-display',
  templateUrl: './platillos-display.component.html',
  styleUrls: ['./platillos-display.component.css']
})
export class PlatillosDisplayComponent implements OnInit {

	@Input() platillo: Platillo;
	@Output() borrarPlatillo = new EventEmitter<Platillo>();
	@Output() editarPlatillo = new EventEmitter<Platillo>();
	public isDeleting = false;

	constructor(private platillosService:PlatillosService) { }

	ngOnInit() {
		
	}

	borrar(){
		this.isDeleting = true;
		this.borrarPlatillo.emit(this.platillo);
	}


	editar(){
		this.editarPlatillo.emit(this.platillo);
	}
}
