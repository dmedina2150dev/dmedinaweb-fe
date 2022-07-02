import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {


  constructor(private http: HttpClient){}

  getSkill() {
      return of(true)
  }
}
