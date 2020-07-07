import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbThemeModule, NbIconLibraries } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { CoreModule } from './core';
import { NbAuthModule } from '@nebular/auth';
import { nbAuthOptions } from './auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbAuthModule.forRoot(nbAuthOptions),
    CoreModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('solid', {
      packClass: 'fas',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('regular', {
      packClass: 'far',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('light', {
      packClass: 'fal',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('duotone', {
      packClass: 'fad',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('brands', {
      packClass: 'fab',
      iconClassPrefix: 'fa',
    });
    // this.iconLibraries.setDefaultPack("font-awesome-free");
    this.iconLibraries.registerSvgPack('misc', {
      blank: '<svg width="1" height="1"></svg> ',
    });
  }
}
