import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { NebularModule } from "../shared";
import { HomeModule } from "../home/home.module";

import { LayoutComponent } from "./layout.component";
import { ContentComponent } from "./content/content.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./navbar/nav/nav.component";
import { ItemComponent } from "./navbar/nav/item/item.component";

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NebularModule,
    HomeModule,
  ]
})
export class LayoutModule {}
