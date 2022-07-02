import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this._aboutService.getSkill().subscribe((res) => console.log(res))
  }

}
