import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { PruebaService } from '../../../services/prueba.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(
    private pruebaService : PruebaService,
    private formBuilder : FormBuilder,
    private location : Location,
    private route: ActivatedRoute
    
  ) { }

  public formulario : FormGroup;
  public id : any;
  public datax : any;


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.formulario = this.formBuilder.group({

      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      telefono : ['', Validators.required],
      correo : ['', Validators.required],
      direccion : ['', Validators.required],
      eliminado : ['', Validators.required]


    });

    this.consultar();
  }
  consultar(){
    this.pruebaService.consultar(this.id).subscribe(
      response=>{
        this.datax = response;
      }
    )
  }

  actualizar() {

    let data = {
      'id' : this.id,
      'nombres' : this.formulario.value.nombres,
      'apellidos' : this.formulario.value.apellidos,
      'telefono' : this.formulario.value.telefono,
      'correo' : this.formulario.value.correo,
      'direccion' : this.formulario.value.direccion,
      'eliminado' : this.formulario.value.eliminado,

    }  
  
    this.pruebaService.actualizar(data).subscribe(
      response =>{
          this.location.back();
          
      }
    )
  }

}
