import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpasswords',
  templateUrl: './forgetpasswords.component.html',
  styleUrls: ['./forgetpasswords.component.scss'],
})
export class ForgetpasswordsComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private appService: AppService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  resetForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    console.log('this.resetForm', this.f);
  }
  get f() {
    return this.resetForm.controls;
  }

  initForm(): void {
    this.resetForm = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
    });
  }

  sendPasswordResetEmail() {
    let resetemail = {
      email: this.f['email'].value,
    };

    this.appService.resetpass(resetemail).subscribe({
      next: (res) => {
        console.log('Password reset email sent', res);
      },
      error: (err) => {
        console.log('this.error', err);
      },
    });
  }
}

