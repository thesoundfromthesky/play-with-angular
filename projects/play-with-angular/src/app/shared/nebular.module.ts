import { NgModule } from "@angular/core";

import {
  NbLayoutModule,
  NbSidebarModule,
  NbActionsModule,
  NbIconModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule,
  NbListModule,
  NbToggleModule,
} from "@nebular/theme";

const NEBULAR_MODULES = [
  NbListModule,
  NbToggleModule,
  NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbActionsModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule,
];

@NgModule({
  exports: [NEBULAR_MODULES]
})
export class NebularModule {}
