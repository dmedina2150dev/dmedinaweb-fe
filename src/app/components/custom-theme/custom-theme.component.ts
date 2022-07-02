import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-theme',
  templateUrl: './custom-theme.component.html',
  styleUrls: ['./custom-theme.component.scss']
})
export class CustomThemeComponent implements OnInit {

  @Output() mode = new EventEmitter<boolean>();
  setLigth: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.setLigth = !this.setLigth;
    this.mode.emit(this.setLigth);
  }

}
