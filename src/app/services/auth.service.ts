import { Injectable } from "@angular/core";
import { User } from "src/model/user.model";
import { HttpClient } from "@angular/common/http";
import { AppSettings } from "../shared/AppSettings";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url_api: string;

  constructor(private http: HttpClient) {
    this.url_api = `${AppSettings.API_ENDPOINT_V1}/auth`;
  }

  login(user: User) {
    return this.http.post(this.url_api, user);
  }

  register(user: User) {}

  logout() {}
}
