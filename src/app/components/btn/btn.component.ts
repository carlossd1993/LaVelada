import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {

  @Input() txtBtn?: string;
  @Input() enlaceBtn?: string;

}
