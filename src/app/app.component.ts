import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {}
  
  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']); // Povratak na login stranicu nakon odjave
    });
  }

}
