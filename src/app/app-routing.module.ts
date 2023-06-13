import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewstudenttableComponent } from './viewstudenttable/viewstudenttable.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { RegisterComponent } from './register/register.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { ForgetpasswordsComponent } from './forgetpasswords/forgetpasswords.component';
import { UserproductComponent } from './userproduct/userproduct.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  { path: 'state', component: StateComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'addstudent',
    component: AddstudentComponent,
    canActivate: [authGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'view',
    component: ViewstudenttableComponent,
    canActivate: [authGuard],
  },
  {
    path: 'update/:id',
    component: UpdatestudentComponent,
    canActivate: [authGuard],
  },
  { path: 'card', component: BlogCardComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'password', component: ForgetpasswordsComponent },
  { path: 'product', component: UserproductComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
