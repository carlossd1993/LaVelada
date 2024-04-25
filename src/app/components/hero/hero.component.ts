import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BtnComponent} from "../btn/btn.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    MatIcon,
    BtnComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
