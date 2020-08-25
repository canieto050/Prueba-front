import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../../services/prueba.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  constructor(
    private pruebaService : PruebaService,
    private formBuilder : FormBuilder,
    private location : Location,


  ) { }

  public formulario : FormGroup;


  ngOnInit(): void {

    this.formulario = this.formBuilder.group({

      nombres : ['', Validators.required],
      apellidos : ['', Validators.required],
      telefono : ['', Validators.required],
      correo : ['', Validators.required],
      direccion : ['', Validators.required]

    });
  }

insertar() {

  let data = {
    'nombres' : this.formulario.value.nombres,
    'apellidos' : this.formulario.value.apellidos,
    'telefono' : this.formulario.value.telefono,
    'correo' : this.formulario.value.correo,
    'direccion' : this.formulario.value.direccion,
  }
  console.log('data', data);



  this.pruebaService.insertar(data).subscribe(
    response =>{
        console.log('inserto');
        this.location.back();
        
    }
  )
}

}
