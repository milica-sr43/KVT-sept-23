import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth) {}

  register() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        console.log('User registered successfully!', response);
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
  }

}
