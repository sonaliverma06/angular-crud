import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userproduct',
  templateUrl: './userproduct.component.html',
  styleUrls: ['./userproduct.component.scss'],
})
export class UserproductComponent {
  productForm!: FormGroup;
  dataImage: any = '';
  user: any = '';
  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  getProfile(): void {
    this.appService.profileShow().subscribe({
      next: (res) => {
        this.user = res.data;
        // console.log('res', res.data);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getProfile();
    console.log('this.postForm', this.f);
  }
  get f() {
    return this.productForm.controls;
  }

  initForm(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }

  handleImageUpload(event: any) {
    console.log('event', event);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.dataImage = reader.result;
      const dataURL = reader.result as string;
      console.log(dataURL); // You can use the dataURL as needed
    };

    reader.readAsDataURL(file);
  }

  submitData() {
    let product = {
      title: this.f['title'].value,
      description: this.f['description'].value,
      image: this.dataImage,
      user_id: this.user.id,
    };
    console.log('product', product);

    this.appService.productadd(product).subscribe({
      next: (res) => {
        console.log('res', res);
      },
      error: (err) => {},
    });
  }
}
