import { Injectable } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Auth } from "./profile.actions";
import { Observable } from "rxjs";
import { ProfileStateModel } from "./profile-state.model";

@Injectable()
export class ProfileFacadeService {
  @Select() profile$: Observable<ProfileStateModel>;

  constructor(private readonly store: Store) {}

  getProfile() {
    return this.profile$;
  }

  dispatchUpdateProfile(payload: ProfileStateModel) {
    return this.store.dispatch(new Auth.UpdateProfile(payload));
  }

  dispatchDeleteProfile(id: string) {
    return this.store.dispatch(new Auth.DeleteProfile(id));
  }

  dispatchGetProfile() {
    return this.store.dispatch(Auth.GetProfile);
  }

  dispatchDeleteSocial(media: string) {
    return this.store.dispatch(new Auth.DeleteSocial(media));
  }
}
