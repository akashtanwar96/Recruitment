import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {  
    this.validateForm = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required]],
    remember: [true]
  });
  }

}
