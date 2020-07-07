import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { DropdownComponent } from "./dropdown.component";
import { MenuComponent } from "./menu/menu.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { ItemComponent } from "./menu/item/item.component";

const components = [
  DropdownComponent,
  ToggleComponent,
  MenuComponent,
  ItemComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components]
})
export class DropdownModule {}
