import { Component } from '@angular/core';
import {HeroComponent} from "../../components/hero/hero.component";
import {CountdownComponent} from "../../components/countdown/countdown.component";
import {VideoComponent} from "../../components/video/video.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CountdownComponent,
    VideoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
