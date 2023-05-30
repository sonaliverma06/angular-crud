import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  postForm!: FormGroup;

  constructor(
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log('this.postForm', this.f);
  }
  get f() {
    return this.postForm.controls;
  }

  initForm(): void {
    this.postForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],

      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(
            '^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$'
          ),
        ]),
      ],
      address: ['', Validators.compose([Validators.required])],
      contact: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
    });
  }

  submitData() {
    console.log(
      'bgnhfgrtxfbhrhgfnisf',
      this.f,
      this.postForm.controls['password'].hasError('pattern')
    );
    let student = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      address: this.f['address'].value,
      city: this.f['city'].value,
      contact: this.f['contact'].value,
    };
    console.log('statudent', student);

    this.appService.add(student).subscribe({
      next: (res) => {
        console.log('res', res);
        this.router.navigate(['/view']);
      },
      error: (err) => {},
    });
  }
}
