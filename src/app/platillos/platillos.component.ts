import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Platillo } from '../models/platillo';
import { PlatillosService } from '../services/platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit, AfterViewInit {
  public platillos : Platillo[];
  public selectedPlatillo : Platillo = new Platillo;
  public loading : boolean = false;

  constructor(private platillosService:PlatillosService) { }

  ngOnInit() {
    this.obtenerPlatillos();
  }

  //--------------------------------------------------------------------
  
  //mongodb:
  public editarPlatillo(platillo){
    console.log('edit',platillo);
    this.selectedPlatillo = Object.assign({}, platillo);
  }

  public editarPlatilloSave(platillo){
    this.platillosService.editarPlatillo(platillo.platillo)
      .then(data => {
        platillo.form.reset();
        this.obtenerPlatillos();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  public borrarPlatillo(platillo){
    this.platillosService.borrarPlatillo(platillo)
      .then(data => {
        this.obtenerPlatillos();
      })
      .catch(error => {
        console.log('error',error);
      });
  }

  public obtenerPlatillos(){
    this.platillosService.obtenerPlatillos().subscribe((data) => {
        console.log('data',data);
        this.platillos = data.platillo;
      },(error)=>{
        console.log('error',error);
      });
      // .then(data => {
      //  this.platillos = data.platillo;
      // })
      // .catch(error => {
      //  console.log('error',error);
      // });
  }

  public agregarPlatillo(platillo:any){
    this.loading = true;
    delete platillo.platillo._id;
    this.platillosService.agregarPlatillo(platillo.platillo)
      .then(data => {
        console.log('platillo agregado');
        platillo.form.reset();
        this.loading = false;
        this.obtenerPlatillos();
      })
      .catch(error => {
        console.log('error',error);
        this.loading = false;
        alert('El platillo seleccionado ya existe, por favor seleccione otro');
      });
  }
  

  /*
  //memoria:
  public editarPlatillo(platillo:Platillo){
    console.log('edit',platillo);
    this.selectedPlatillo = Object.assign({}, platillo);
  }

  public editarPlatilloSave(platillo:Platillo){
    this.platillosService.editarPlatillo(platillo);
    //platillo.form.reset();
    this.obtenerPlatillos();
  }

  public borrarPlatillo(platillo:Platillo){
    this.platillosService.borrarPlatillo(platillo);
    this.obtenerPlatillos();
  }

  public agregarPlatillo(platillo:Platillo){
    this.platillosService.agregarPlatillo(platillo);
    console.log('platillo agregado');
    //platillo.form.reset();
    this.loading = false;
    this.obtenerPlatillos();
  }

  public obtenerPlatillos(){
    this.platillos = this.platillosService.obtenerPlatillos();
    console.log('platillos',this.platillos);
  }
  */

  ngAfterViewInit(){
    console.timeEnd();
  }
}
