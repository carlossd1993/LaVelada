import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {


  cuantosDiasFaltan:number=0;
  constructor() {
    this.cuantosDiasFaltan=this.diasFaltan();
  }

  diasFaltan():number{
    let dias:number = 0;
    let fechaEvento=new Date('2024-07-13');
    let fechaHoy:Date = new Date();

    dias=Math.floor((fechaEvento.getTime()-fechaHoy.getTime())/(1000*60*60*24));
    return dias;
  }




}
