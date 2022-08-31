import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '../interfaces/ILoginForm';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: ILoginForm = {
    email: "",
    password: "",
    confirm_password: ""
  }

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
