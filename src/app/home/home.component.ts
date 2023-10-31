import { Component, OnInit } from '@angular/core';
import { iStep } from '../istep.interface';
import { StepsService } from '../steps.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Definición de la clase del componente "Home" que implementa la interfaz OnInit.
export class HomeComponent implements OnInit {
  onBoardingSteps: iStep[] = []; // Inicializamos una propiedad para almacenar las frases del onBoarding.

  // Constructor del componente que recibe una instancia del servicio StepsService.
  constructor(private stepsService: StepsService) {}

  // Método de inicialización del componente que se llama automáticamente cuando se crea una instancia del componente.
  ngOnInit(): void {
    // Llamamos al método getSteps del servicio StepsService para obtener las frases del onBoarding.
    this.onBoardingSteps = this.stepsService.getSteps();
  }
}
