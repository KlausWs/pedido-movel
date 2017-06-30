import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import 'intl';
import 'intl/locale-data/jsonp/en';

platformBrowserDynamic().bootstrapModule(AppModule);
