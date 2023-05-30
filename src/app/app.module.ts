import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewstudenttableComponent } from './viewstudenttable/viewstudenttable.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogCardComponent } from './blog-card/blog-card.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // {path: 'friends', component: FriendComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewstudenttableComponent,
    UpdatestudentComponent,
    LoginComponent,
    RegisterComponent,
    BlogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
