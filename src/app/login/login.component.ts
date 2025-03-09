import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginFormGroup! :FormGroup;
    constructor(private fb:FormBuilder,private authService:AuthenticationService,private router:Router){
      
    }
    login() {
      let username=this.loginFormGroup.value.username;
      let password=this.loginFormGroup.value.password;
      let auth=this.authService.login(username,password);
      if(auth==true){
        this.router.navigateByUrl("/admin");
      }
      }

  ngOnInit(): void {
   this.loginFormGroup=this.fb.group({
    username:this.fb.control(''),
    password:this.fb.control('')

   }); 
  }
}
