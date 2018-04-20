import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlatillosService } from './platillos.service';
import { Platillo } from './platillo.model';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  @Output() loadedPlatillo: EventEmitter<Platillo> = new EventEmitter<Platillo>();

  constructor(private platillosService:PlatillosService) {
  }

  ngOnInit() {
  }

  public insertedPlatillo(platillo:Platillo){
    this.platillosService.addPlatillo(platillo);
  }

  public updatededPlatillo(platillo:Platillo){
    this.platillosService.editPlatillo(platillo);
  }

  public deletededPlatillo(platillo:Platillo){
    this.platillosService.removePlatillo(platillo);
  }

  public loadedPlatillotoHtml(platillo:Platillo){
    this.loadedPlatillo.emit(platillo);
    alert(platillo.nombre);
  }

}
