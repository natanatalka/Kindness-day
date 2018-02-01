import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UserResolve} from './user-details/user.resolver';

import { routing } from './app.routing';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { UserLayoutComponent } from './_layout/user-layout/user-layout.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { LoginComponent } from './login/login.component';
import { ValidationComponent  } from './validators/validation.component';
import {LoginService} from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    NewUserComponent,
    PageNotFoundComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    UserLayoutComponent,
    ReceiverComponent,
    LoginComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    routing
  ],
  providers: [UsersService, UserResolve, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
