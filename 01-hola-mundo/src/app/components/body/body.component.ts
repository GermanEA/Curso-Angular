import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    mostrar = true;

    frase:any = {
        mensaje: 'Este tio es subnormal',
        autor: 'Confucio'
    };

    personajes: string[] = ['Confucio', 'Freud', 'Aristóteles'];
}