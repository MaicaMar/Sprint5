import { Injectable } from '@angular/core';
import { iStep } from './istep.interface';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  // Definimos una propiedad privada para almacenar el array de frases del onBoarding.
  private onBoardingSteps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: 'assets/images/time_managment.svg',
      bgcolor: '#35A29F'
    },
    {
      title: 'Programa projectes propis:',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: 'assets/images/programming.svg',
      bgcolor: '#DBDFEA'
    },
    {
      title: 'Procura descansar:',
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: 'assets/images/meditation.svg',
      bgcolor: '#E5D283'
    },
    // Puedes agregar más objetos según sea necesario para representar otros pasos del onBoarding.
  ];

  // Definimos un método llamado 'getSteps' que devuelve el array de frases.
  getSteps(): iStep[] {
    return this.onBoardingSteps; // Devolvemos el array almacenado en la propiedad.
  }
}
