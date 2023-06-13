import { Component } from '@angular/core';
import { Router, RouterPreloader } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // const b = localStorage.getItem("token");
    // console.log("aaaaaaaaaaa",b);

    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
