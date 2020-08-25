import { Injectable, Input} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneralService   {
  
  //Variables globales
  public static get URL(): String {
    return "http://localhost/prueba/blog/public/";
  }

}
