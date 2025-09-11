import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { SelectAvatarComponent } from './authentication/select-avatar/select-avatar.component';
import { RequestNewPasswordComponent } from './authentication/request-new-password/request-new-password.component';
import { ConfirmNewPasswordComponent } from './authentication/confirm-new-password/confirm-new-password.component';

export const routes: Routes = [
  { path: '', redirectTo: 'authentication/login', pathMatch: 'full' },
  { path: 'login', redirectTo: 'authentication/login', pathMatch: 'full' },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      { path: 'select-avatar', component: SelectAvatarComponent },
      { path: 'request-new-password', component: RequestNewPasswordComponent },
      { path: 'confirm-new-password', component: ConfirmNewPasswordComponent },
    ],
  },
  {
    path: 'messenger',
    loadComponent: () =>
      import('./messenger/messenger.component').then(
        (m) => m.MessengerComponent
      ),
  },
];
