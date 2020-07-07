import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";

import { ProfileStateModel } from "./profile-state.model";
import { Auth } from "./profile.actions";
import { AuthService } from "../../auth/services/auth.service";

@State<ProfileStateModel>({
  name: "profile",
  defaults: {
    name: { familyName: "", givenName: "" },
    login: {
      username: "",
    },
    emails: [{ value: "", verified: false }],
    socialMediaHandles: {},
    roles: [],
    createdDate: "",
    createdTime: "",
    updatedDate: "",
    updatedTime: "",
    id: "",
  },
})
@Injectable()
export class ProfileState {
  constructor(private readonly authService: AuthService) {}

  @Action(Auth.GetProfile, { cancelUncompleted: true })
  fetchProfile({ patchState }: StateContext<ProfileStateModel>) {
    return this.authService.getProfile().pipe(
      tap((profile) => {
        patchState(profile);
      })
    );
  }

  @Action(Auth.UpdateProfile, { cancelUncompleted: true })
  updateProfile(
    { patchState }: StateContext<ProfileStateModel>,
    { payload }: Auth.UpdateProfile
  ) {
    return this.authService.updateProfile(payload.id, payload).pipe(
      tap((profile) => {
        patchState(profile);
      })
    );
  }

  @Action(Auth.DeleteProfile, { cancelUncompleted: true })
  deleteProfile(
    ctx: StateContext<ProfileStateModel>,
    { id }: Auth.DeleteProfile
  ) {
    return this.authService.deleteProfile(id);
  }

  @Action(Auth.DeleteSocial, { cancelUncompleted: true })
  deleteSocial(
    { patchState }: StateContext<ProfileStateModel>,
    { media }: Auth.DeleteSocial
  ) {
    return this.authService.deleteSocial(media).pipe(
      tap((profile) => {
        patchState(profile);
      })
    );
  }
}
