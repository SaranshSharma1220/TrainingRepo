import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form :FormGroup;
  constructor (public auth:AuthService,private fb:FormBuilder,private router:Router, private userService : UserService){
    this.form=fb.group({
      email:'',
      password:''
    });
  }

  onSubmit() {
    this.auth.login(this.form.value).subscribe({
      next: (response) => {
        this.userService.login(response.user.name); // Update shared state
        this.router.navigate(['/']);
      },
      error: () => alert('Login Failed'),
    });
  }
  
}

