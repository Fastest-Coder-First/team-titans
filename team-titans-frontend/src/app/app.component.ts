import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn = false;
  constructor() {
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }
}
