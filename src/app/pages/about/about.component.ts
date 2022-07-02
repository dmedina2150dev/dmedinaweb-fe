import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from 'src/app/core/models/skill';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  private skills$!: Subscription;
  skills: Skill[] = [];

  constructor(
    private _aboutService: AboutService
  ) { }

  ngOnInit(): void {
    this.skills$ = this._aboutService.getSkill()
      .subscribe((skills) => {
        this.skills = skills;
      })
  }

  ngOnDestroy(): void {
    this.skills$.unsubscribe();
  }

}
