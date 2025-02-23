import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'website';
  array = [1, 2, 3, 4];
}
