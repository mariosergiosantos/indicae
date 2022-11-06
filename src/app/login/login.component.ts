import { Component, OnInit } from "@angular/core";
import { User } from "src/model/user.model";
import { AuthService } from "../services/auth.service";
import { Messages } from "../shared/Messages";
import { Fornecedor } from "src/model/fornecedor.model";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  auth: User;
  fornecedor: Fornecedor;
  msgError: string;
  ambiente: string;

  ngOnInit() {
    this.auth = new User();
    this.fornecedor = new Fornecedor("Mário", "mario@teste.com", "7199191818181");
    this.ambiente = environment.ambiente;
  }

  login() {
    this.authService.login(this.auth).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.msgError = Messages.MSG_004;
        console.log(error);
      }
    );
  }
}
