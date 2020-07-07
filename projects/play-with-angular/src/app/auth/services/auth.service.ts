import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ConfigService } from "../../core/config";
import { Profile } from "../../shared";

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {}

  getProfile() {
    return this.http.get(`${this.configService.baseUrl}/api/auth/profile`);
  }

  updateProfile(id, user: Profile) {
    return this.http.put(`${this.configService.baseUrl}/api/users/${id}`, user);
  }

  deleteProfile(id) {
    return this.http.delete(`${this.configService.baseUrl}/api/users/${id}`, {
      responseType: "text",
    });
  }

  deleteSocial(media: string) {
    return this.http.delete(
      `${this.configService.baseUrl}/api/auth/social/${media}`
    );
  }

  uploadAvatar(formData: FormData) {
    return this.http.post(
      `${this.configService.baseUrl}/api/users/avatar`,
      formData
    );
  }
}
