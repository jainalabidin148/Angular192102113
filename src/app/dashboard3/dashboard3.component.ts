import { HttpClient } from '@angular/common/http';
import { AfterViewInit,Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements OnInit, AfterViewInit {

  constructor(private http : HttpClient, private renderer : Renderer2) { }


  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

  }

  ngOnInit(): void {

  }

}
