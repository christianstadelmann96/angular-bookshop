import { Component, OnInit } from '@angular/core';
import { ILoginForm } from '../interfaces/ILoginForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: ILoginForm = {
    email: "",
    password: "",
    confirm_password: ""
  };

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
