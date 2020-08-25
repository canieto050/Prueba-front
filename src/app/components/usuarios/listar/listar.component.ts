import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../../services/prueba.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(
    private pruebaService : PruebaService,
  ) { }

  public listarUsuarios : [];

  ngOnInit(): void {
    this.listar();
  }
  

  listar(){
    this.pruebaService.listar().subscribe(
      response => {
        this.listarUsuarios = response;
        console.log('listar', this.listarUsuarios);
      }
    )
  }2

  eliminar(id){
    this.pruebaService.eliminar(id).subscribe(
      response => {
        this.listarUsuarios = response;
        this.listar();
      }
    )
  }


}
