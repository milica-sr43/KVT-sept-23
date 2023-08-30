import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
    //{ path: '', redirectTo: 'navbar', pathMatch: 'full'},
    //{ path: 'navbar', component: NavbarComponent},
    //{ path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    //{ path: '', component: AppComponent, canActivate: [AuthGuard] },
    //{ path: 'dashboard', component: DashboardComponent }, 
    //{ path: '', redirectTo: 'login', pathMatch: 'full' }
    {path: '', pathMatch: 'full', component: LandingComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
