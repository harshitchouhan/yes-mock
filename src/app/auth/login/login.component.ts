import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AuthService } from "../../shared/services/firebase/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ["test@gmail.com", [Validators.required, Validators.email, Validators.pattern(environment.emailRegex)]],
      password: ["test123", Validators.required],
    });
  }

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    this.authService.SignIn(this.loginForm.value["email"], this.loginForm.value["password"]);
  }
}
