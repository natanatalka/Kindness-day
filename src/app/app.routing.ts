import {RouterModule, Routes} from '@angular/router';
import {NewUserComponent} from './new-user/new-user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserResolve} from './user-details/user.resolver';
import {UsersComponent} from './users/users.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {ReceiverComponent} from './receiver/receiver.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [

  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'users/:id',
        component: UserDetailsComponent,
        resolve: {
          user: UserResolve
        }
      },
      {
        path: 'user/new',
        component: NewUserComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'receiver',
    component: ReceiverComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: 'login'
  },
  { path: '**', component: UsersComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true } );
