import { Component } from '@angular/core';
import {NgxLiteYoutubeModule} from "ngx-lite-video";

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [    NgxLiteYoutubeModule, // YouTube lite module
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {

}
