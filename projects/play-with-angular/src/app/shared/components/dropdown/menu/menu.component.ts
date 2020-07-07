import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @HostBinding("class") class="position-laptop-absolute translateY-laptop-100"
  constructor() { }

  ngOnInit() {
  }

}
