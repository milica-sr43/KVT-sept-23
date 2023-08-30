import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  

  constructor(private auth: AngularFireAuth, private router: Router) {} 

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(response => {
        console.log('Logged in successfully!', response);
        this.router.navigate(['/dashboard']); 
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  }

}
