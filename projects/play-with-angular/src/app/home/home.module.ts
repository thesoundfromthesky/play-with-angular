import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NebularModule } from '../shared';

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    NebularModule,
  ],
})
export class HomeModule {}
