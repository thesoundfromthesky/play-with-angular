import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from "@nebular/auth";
import { LoginComponent } from "./login/login.component";
import { CallbackComponent } from "./callback/callback.component";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from "./auth.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "logout",
        component: NbLogoutComponent
      },
      {
        path: "request-password",
        component: NbRequestPasswordComponent
      },
      {
        path: "reset-password",
        component: NbResetPasswordComponent
      },
      {
        path: "callback",
        component: CallbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
