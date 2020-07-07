import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'nav-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() navItem: NavItem | undefined;
  constructor() {}

  ngOnInit() {}
}
