import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2V1hhQlJCfVhdXGFWfFN0RnNYf1RycV9GZkwgOX1dQl9gSXhQdkVgWHxedHVTRWc=");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
