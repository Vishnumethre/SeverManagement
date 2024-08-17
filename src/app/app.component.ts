import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: string = '';
  flag = false;
  ShowPassword()
  {
    setTimeout(() => {
      this.flag = false;
    }, 2000);
    this.flag = true;
  }
}
