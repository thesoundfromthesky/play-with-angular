import { Component, OnInit, Input } from "@angular/core";
import { DropdownItem } from '../../models/dropdown-item';

@Component({
  selector: "dropdown-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() dropdownItem:DropdownItem;
  constructor() {}

  ngOnInit() {}

  trackByFn(i: number, e: any) {
    return e.id;
  }
}
