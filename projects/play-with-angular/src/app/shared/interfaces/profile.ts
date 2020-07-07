import { Role } from "../enums";

interface Name {
  familyName: string;
  givenName: string;
}

interface Email {
  value: string;
  verified: boolean;
}

interface Login {
  username: string;
  password?: string;
}

export interface Profile {
  name: Name;
  emails: Email[];
  roles: Role[];
  login: Login;
  socialMediaHandles: object;
  createdDate: string;
  createdTime: string;
  updatedDate: string;
  updatedTime: string;
  id: string;
}
