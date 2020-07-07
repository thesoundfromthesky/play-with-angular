import { ProfileStateModel } from "./profile-state.model";

// tslint:disable-next-line: no-namespace
export namespace Auth {
  export class GetProfile {
    static readonly type = "[Auth] Get Profile";
  }

  export class UpdateProfile {
    static readonly type = "[Auth] Update Profile";
    constructor(public payload: ProfileStateModel) {}
  }

  export class DeleteProfile {
    static readonly type = "[Auth] Delete Profile";
    constructor(public id: string) {}
  }

  export class DeleteSocial {
    static readonly type = "[Auth] Delete Social";
    constructor(public media: string) {}
  }
}
