import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  RegisterForm = new FormGroup(
    {
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mail: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl('')
    });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.RegisterForm.value);
  }
}