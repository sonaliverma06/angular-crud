// ##################### Home compileComponentFromMetadata.ts###################

// import { Component } from '@angular/core';
// import axios from 'axios';
// import { AppService } from '../app.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
// })
// export class HomeComponent {
//   constructor(private appService: AppService, private fb: FormBuilder) {}
//   postForm!: FormGroup;
//   ngOnInit(): void {
//     // this.getAll();
//     this.initForm();
//     console.log('this.postForm', this.f);
//   }
//   get f() {
//     return this.postForm.controls;
//   }

//   initForm(): void {
//     this.postForm = this.fb.group({
      
//     });
//   }

//   submitData(value: any): void {
//     console.log('value', value);

//     let student = {
//       name: value.name,
//       email: value.email,
//       password: value.password,
//     };
//     this.appService.add(student).subscribe((response) => {
//       console.log(response);
//     });
//   }
// }


// #############################################################################
                            //   home html => edit


                            // <form [formGroup]="postForm" (ngSubmit)="submitData()">
//   <div class="main">
//     <div class="input-fields">
//       <input
//         name="name"
//         autocomplete="off"
         
//         formControlName="name"
//         placeholder="Name"
//         id="name"
//         type="text"
//       />
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'required',
//           message: 'Name is required',
//           control: postForm.controls['name']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'name',
//           message: 'name is invalid',
//           control: postForm.controls['name']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'minLength',
//           message: 'name should have at least 3 symbols',
//           control: postForm.controls['name']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'maxLength',
//           message: 'name should have maximum 360 symbols',
//           control: postForm.controls['name']
//         }"
//       ></ng-container>
//     </div>
//     <div class="input-fields">
//       <input
//         name="email"
//        placeholder="enter email"
//         id="email"
//         type="email"
//       autocomplete="off"
//          class="form-control"
//       />
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'required',
//           message: 'Email is required',
//           control: postForm.controls['email']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'email',
//           message: 'Email is invalid',
//           control: postForm.controls['email']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'minLength',
//           message: 'Email should have at least 3 symbols',
//           control: postForm.controls['email']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'maxLength',
//           message: 'Email should have maximum 360 symbols',
//           control: postForm.controls['email']
//         }"
//       ></ng-container>
//     </div>
//     <div class="input-fields">
//       <input
//         name="password"
//         autocomplete="off"
//         class="form-control"
//         placeholder="enter password"
//         id="password"
//         type="password"
//         class="input-field"
//       />
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'required',
//           message: 'Password is required',
//           control: postForm.controls['password']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'minlength',
//           message: 'Password should have at least 3 symbols',
//           control: postForm.controls['password']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'maxLength',
//           message: 'Password should have maximum 100 symbols',
//           control: postForm.controls['password']
//         }"
//       ></ng-container>
//       <ng-container
//         [ngTemplateOutlet]="error"
//         [ngTemplateOutletContext]="{
//           validation: 'pattern',
//           message:
//           'Password should contain atleast uppercase, lowercase, special character,number and limit 8-20 must be required.',
//           control: postForm.controls['password']
//         }"
//       ></ng-container>
//     </div>
//     <button>Add Data</button>
//   </div>
// </form>



// ############################################################################################

                //   home html :==> old



//   <form #loginForm="ngForm" (ngSubmit)="submitData(loginForm.value)">
//     <div class="main">
//       <div class="input-fields">
//         <input name="name" ngModel placeholder="Name" id="name" type="text" class="input-field" />
//       </div>
//       <div class="input-fields">
//         <input name="email" ngModel placeholder="enter email" id="email" type="email" class="input-field" />
//       </div>
//         <div class="input-fields">
//           <input name="password" ngModel placeholder="enter password" id="password" type="password" class="input-field" />
//         </div>
//       <button>Add Data </button>
//     </div>
//   </form>




// 333333333333############################################################################
// StudentRouter.post("/register", async (req, res) => {
//   const data = req.body;
//   console.log("dataffffffffff",data);
//   const { name, email, password } = data;
  
//   const hashedPassword = await bcrypt.hash(password, saltRounds);
//   const user = await StudentController.register(req, res)
//     .then((res1) => {
//     [name, email, hashedPassword]
//     }
//   );



// ############################################################################################

                //   COMPLETE REGISTER FORM WITH TAILWIND CSS



//                 <section class="bg-gray-50 dark:bg-gray-900">
//   <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//     <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//       <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
//       Flowbite
//     </a>
//     <div
//       class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//       <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//         <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//           Create and account
//         </h1>
//         <form class="space-y-4 md:space-y-6" [formGroup]="registerForm" (ngSubmit)="submituser()">

//           <div>
//             <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
//             <input type="text" name="name" id="name" formControlName="name"
//               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="enter user name" required="">
          
//           </div>
//           <div>
//             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//             <input type="email" name="email" id="email" formControlName="email"
//               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               placeholder="name@company.com" required="">
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                           validation: 'required',
//                           message: 'Email is required',
//                           control: registerForm.controls['email']
//                         }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                           validation: 'email',
//                           message: 'Email is invalid',
//                           control: registerForm.controls['email']
//                         }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                           validation: 'minLength',
//                           message: 'Email should have at least 3 symbols',
//                           control: registerForm.controls['email']
//                         }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                           validation: 'maxLength',
//                           message: 'Email should have maximum 360 symbols',
//                           control: registerForm.controls['email']
//                         }"></ng-container>
//           </div>
//           <div>
//             <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//             <input type="password" name="password" id="password" placeholder="••••••••"
//               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               required="">
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                                         validation: 'required',
//                                         message: 'Password is required',
//                                         control: registerForm.controls['password']
//                                       }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                                         validation: 'minlength',
//                                         message: 'Password should have at least 3 symbols',
//                                         control: registerForm.controls['password']
//                                       }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                                         validation: 'maxLength',
//                                         message: 'Password should have maximum 100 symbols',
//                                         control: registerForm.controls['password']
//                                       }"></ng-container>
//                 <ng-container [ngTemplateOutlet]="formError" [ngTemplateOutletContext]="{
//                                         validation: 'pattern',
//                                         message:
//                                           'Password should contain atleast uppercase, lowercase, special character,number and limit 8-20 must be required.',
//                                         control: registerForm.controls['password']
//                                       }"></ng-container>
//           </div>
         
//           <div class="flex items-start">
//             <div class="flex items-center h-5">
//               <input id="terms" aria-describedby="terms" type="checkbox"
//                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                 required="">
//             </div>
//             <div class="ml-3 text-sm">
//               <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
//                   class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and
//                   Conditions</a></label>
//             </div>
//           </div>
//           <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
//            >register</button>
//           <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//             Already have an account? <a href="#"
//               class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>

