import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    component: WebComponentWrapper,
    data: {
      type: 'manifest',
      remoteName: 'vue-app',
      exposedModule: './web-components',
      elementName: 'vue-element'
    } as WebComponentWrapperOptions
  },

  {
    path: 'auth',
    loadChildren: () =>
         loadRemoteModule({
          type: 'manifest',
          remoteName: 'angular-app',
          exposedModule: './Routes'
         })
         .then(m => m.routes)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
