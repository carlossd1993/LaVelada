import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {CountdownComponent} from "../../components/countdown/countdown.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CountdownComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
