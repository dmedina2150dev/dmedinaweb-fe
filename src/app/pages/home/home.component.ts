import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('header') header!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.header.nativeElement, 'active');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.header.nativeElement, 'active');
  }

}
