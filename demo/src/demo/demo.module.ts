import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InlineSVGModule } from '@helpcrunch/ng-inline-svg';

import { DemoComponent } from './demo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, HttpClientModule, InlineSVGModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoAppModule { }
