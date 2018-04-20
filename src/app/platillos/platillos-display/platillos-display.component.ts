import { Component, OnInit, Input } from '@angular/core';
import { Platillo } from '../platillo.model';

@Component({
  selector: 'app-platillos-display',
  templateUrl: './platillos-display.component.html',
  styleUrls: ['./platillos-display.component.css']
})
export class PlatillosDisplayComponent implements OnInit {

	@Input() platillo: Platillo;

	constructor() { }

	ngOnInit() {
	}

}
