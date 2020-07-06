import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash:true,
      onSameUrlNavigation: 'reload',
      // enableTracing: true,
      scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
      // scrollOffset: [0, 100], // [x, y]
    } as ExtraOptions),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
