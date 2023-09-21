import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoAppModule } from './demo/demo.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(DemoAppModule)
  .catch(err => console.log(err));
