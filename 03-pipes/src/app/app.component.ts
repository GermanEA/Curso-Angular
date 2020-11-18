import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string       = 'Capitán América';
  nombre2:string      = 'GeRmÁn EstRAdE';
  array:Array<number> = [1,2,3,4,5,6,7,8,9,10];
  PI:number           = Math.PI;
  porcentaje:number   = 0.235;
  salario:number      = 1234.5;
  fecha:Date          = new Date();
  activar:boolean     = true;

  idioma:string       = 'fr';
  videoUrl:string     = 'https://www.youtube.com/embed/sTcyc-LkMbw';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llegaron los datos');
    },4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolvernie',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
