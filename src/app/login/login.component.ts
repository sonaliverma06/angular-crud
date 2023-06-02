import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}
  error: any = '';

  loginForm!: FormGroup;
  loginusers: Array<any> = [];
  ngOnInit(): void {
    this.initForm();
    console.log('this.loginForm', this.f);
  }
  get f() {
    return this.loginForm.controls;
  }

  initForm(): void {
    this.loginForm = this.fb.group({
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

  loginuser() {
    // console.log(
    //   'bgnhfgrtxfbhrhgfnisf',
    //   this.f,
    //   this.loginForm.controls['password'].hasError('pattern')
    // );
    let loginusers = {
      email: this.f['email'].value,
      password: this.f['password'].value,
    };
  

    this.appService.addloginuser(loginusers).subscribe({
      next: (res) => {
     
        localStorage.setItem('token', res.res.token);
        console.log("dfg",res.token);
        console.log('res', res);
        

        this.router.navigate(['/view']);
      },
      error: (err) => {
        console.log('this.error', err);
     
      },
    });
  }
}


