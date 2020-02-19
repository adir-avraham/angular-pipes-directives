import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  
  onSubmit(form: NgForm) {
    this.isLoading = true;
    const {email, password} = form.value;

    if ( this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        (resData: any) => {
          console.log(resData)
          this.isLoading = false;
          if (resData.status) form.reset();
        }, error => {
          console.log(error)
          this.isLoading = false;
        }
        )   
    } else {
  
      this.authService.register(email, password).subscribe(
        (resData: any) => {
          console.log(resData)
          this.isLoading = false;
          if (resData.status) form.reset();
        }, error => {
          console.log(error)
          this.isLoading = false;
        }
        )
    }

  }
}
