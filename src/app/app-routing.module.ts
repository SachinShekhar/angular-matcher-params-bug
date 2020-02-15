import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: NotFoundComponent
  },
  {
    path: 'user',
    component: NotFoundComponent
  },
  {
    matcher: (url: UrlSegment[]) =>
      url.length > 0 && url[0].path.startsWith('@')
        ? {
            consumed: [url[0]], // Passing the first segment to keep it from hijacking internal router of the lazy-loaded module
            posParams: {
              userId: new UrlSegment(url[0].path.substr(1), url[0].parameters)
            }
          }
        : null,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    matcher: (url: UrlSegment[]) =>
      url.length > 0 && url[0].path.startsWith('~')
        ? {
            consumed: url,
            posParams: {
              userId: new UrlSegment(url[0].path.substr(1), url[0].parameters)
            }
          }
        : null,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
