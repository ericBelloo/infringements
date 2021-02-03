import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup

  public messageVisible: boolean
  public messageType: string
  public messageContent: string

  constructor( private formBuilder: FormBuilder,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.setForm()
  }

  public setForm(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required],
      password_repeat: ['', Validators.required],
      police_number: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  public validateEmpty(formControlName: string) : boolean {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched
  }
 
  public signUp(): void {
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

  public showLogin(): void {
    this.router.navigate(['/login'])
  }

}
