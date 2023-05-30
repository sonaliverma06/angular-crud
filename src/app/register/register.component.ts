import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  registerForm!: FormGroup;
  ngOnInit(): void {
    this.initForm();
    console.log('this.registerForm', this.f);
  }
  get f() {
    return this.registerForm.controls;
  }

  initForm(): void {
    this.registerForm = this.fb.group({
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
    });
  }

  submituser() {
    console.log(
      'bgnhfgrtxfbhrhgfnisf',
      this.f,
      this.registerForm.controls['password'].hasError('pattern')
    );
    let user = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      address: '',
      contact: '',
      city: '',
    };
    console.log('user', user);

    this.appService.adduser(user).subscribe({
      next: (res) => {
        console.log('res', res);
        this.router.navigate(['/view']);
      },
      error: (err) => {},
    });
  }
}
