import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudenttable',
  templateUrl: './viewstudenttable.component.html',
  styleUrls: ['./viewstudenttable.component.scss'],
})
export class ViewstudenttableComponent {
  posts: any;
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.appService.getAll().subscribe({
      next: (res) => {
        this.posts = res;
 },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteData(id: any) {
    this.appService.deleteData(id).subscribe({
      next: (res) => {
        console.log('res', res);
        this.getAll();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  updateData(posts: any) {
    this.router.navigate([`/update/${posts.id}`]);
  }
}


