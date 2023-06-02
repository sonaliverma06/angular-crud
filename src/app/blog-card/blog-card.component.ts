import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() product: any = {};
  //
  constructor() {
    console.log('this.product', this.product);
  }
  ngOnInit(): void {
    console.log('image', this.product);
  }
  // products: any;
  // constructor(private appService: AppService) {}

  // ngOnInit(): void {
  //   this.getproduct();
  // }
  // getproduct() {
  //   this.appService.getproduct().subscribe({
  //     next: (res) => {
  //       this.products = res;
  //       console.log('products.....', this.products);

  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
