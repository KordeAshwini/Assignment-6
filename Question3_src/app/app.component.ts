import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  
  template: `<h4 [class]="'success'">Marvellous Infosystems</h4>

  <h5>Enter Your Name : </h5>
  <input type="text">
  <router-outlet></router-outlet>`,

  styles: `.success
  {
      color:blue;
  }`
})
export class AppComponent {
  title = 'InlineFormat';
}
