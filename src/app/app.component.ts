import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/services/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig.firebase);
  }

  isAuthenticated () {
    return this.authService.isAuthenticated;
  }

  logOut() {
    this.authService.logout();
  }
}
