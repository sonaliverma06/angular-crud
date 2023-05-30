import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewstudenttableComponent } from './viewstudenttable/viewstudenttable.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'addstudent', component: HomeComponent },
  { path: '', component: RegisterComponent },
  { path: 'view', component: ViewstudenttableComponent },
  { path: 'update/:id', component: UpdatestudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
