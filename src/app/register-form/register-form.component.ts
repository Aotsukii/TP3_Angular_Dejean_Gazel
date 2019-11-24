import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  RegisterForm: FormGroup;
  datas = [];
  animals: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ])],
      password: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$')
      ])],
      animals: ['', Validators.required]
    });
  }

  addDatas() {
    this.datas.push({
      firstName: this.RegisterForm.value.firstName,
      lastName: this.RegisterForm.value.lastName,
      mail: this.RegisterForm.value.mail,
      password: this.RegisterForm.value.password,
      phone: this.RegisterForm.value.phone,
      animals: this.RegisterForm.value.animals
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.RegisterForm.value);
    this.saveInfos();
    this.addDatas();
    localStorage.clear(); /* Cleared so we don't display multiple if re-submitted */
  }

  saveInfos() {
    localStorage.setItem('User', JSON.stringify(this.RegisterForm.value));
  }

  validateEmail(c: FormControl) {
    let EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i;
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    }
  }
  
}