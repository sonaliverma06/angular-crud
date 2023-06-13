import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss'],
})
export class UpdatestudentComponent {
  post: any = {};
  postId: any = '';
  updatetForm!: FormGroup;
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private appService: AppService
  ) {
    this.route.params.subscribe((i: any) => {
      console.log('ihg', i);
      this.postId = i.id;
    });
  }


  ngOnInit(): void {
    console.log('this.id', this.postId);
    this.initForm();
    this.getOne(this.postId);
  }
  getOne(id: any): void {
    this.appService.getOne(id).subscribe({
      next: (res) => {
        console.log('res', res);
        this.post = res;
      },
      error: (err) => {},
    });
  }

  get f() {
    return this.updatetForm.controls;
  }

  initForm(): void {
    this.updatetForm = this.fb.group({});
    console.log('thidasdfwrfws.id', this.updatetForm);
  }

  updatedata(post: any): void {
    console.log('value', post);

    let data = {
      id: post.id,
      name: post.name,
      email: post.email,
      password: post.password,
      address: post.address,
      contact: post.contact,
      city: post.city,
    };
    console.log('data', data);
    this.appService.put(data, this.postId).subscribe({
      next: (res) => {
        console.log('res', res);
        this.router.navigate(['/view']);
      },
      error: (err) => {},
    });
  }
}
