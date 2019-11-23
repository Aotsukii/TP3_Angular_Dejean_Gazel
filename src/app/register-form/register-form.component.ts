import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Users } from '../users';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'register-form', //j'ai enlever le app-
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
  
  constructor(){

  }
  ngOnInit(){

  }
  firstname = new FormControl('',[Validators.required, Validators.maxLength(12)]);
  lastname = new FormControl('',[Validators.required, Validators.maxLength(12)]);
  mail = new FormControl('', [Validators.required, Validators.maxLength(24)]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  phone = new FormControl('', [Validators.required,]);
  onFormSubmit(userForm:NgForm){
    console.log(userForm);
  }
  resetUserForm(userForm: NgForm){
    userForm.resetForm();;
  }
}