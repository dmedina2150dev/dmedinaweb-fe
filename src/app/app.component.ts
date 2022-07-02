import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setMode: boolean = false;

  receiveMode(event: boolean) {
    this.setMode = event;
  }
}
