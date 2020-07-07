import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { NbAuthModule } from "@nebular/auth";
import { LoginComponent } from "./login/login.component";
import { NebularModule, FormModule } from "../shared";
import { CallbackComponent } from "./callback/callback.component";
import { RegisterComponent } from "./register/register.component";
import { AuthComponent } from "./auth.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthService } from "./services/auth.service";
import { NgxsModule } from "@ngxs/store";
import { ProfileState, ProfileFacadeService } from "../store";

@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent,
    RegisterComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbAuthModule,
    NebularModule,
    FormModule,
    NgxsModule.forFeature([ProfileState]),
  ],
  providers: [AuthService, ProfileFacadeService],
})
export class AuthModule {}
