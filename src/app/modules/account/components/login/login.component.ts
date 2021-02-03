
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // icons
  public faUser = faUser
  public faLock = faLock

  // message
  public messageVisible: boolean
  public messageType: string
  public messageContent: string

  public form: FormGroup

  constructor( private formBuilder: FormBuilder,
               private router: Router  
  ) { }

  ngOnInit(): void {
    this.messageVisible = false
    this.setForm()    
  }
  
  public setForm(){
    this.form = this.formBuilder.group({
      user: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  public validateEmpty(formControlName: string) : boolean {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched
  }
 
  public login(): void {
    
    if (this.form.valid){
      console.log(this.form.value)
    }else{      
      this.messageVisible = true
      this.messageContent = 'Invalid user or password'
      this.messageType = 'error'
    }    

    // hide message
    setTimeout(() => {
      this.messageVisible = false
    }, 3000)
  }  

  public showSingUp(): void{
    this.router.navigate(['/sign-up'])
  }

}
