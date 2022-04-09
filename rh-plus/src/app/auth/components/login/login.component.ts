import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  @Output() loginCredentials = new EventEmitter<Credential>();

  constructor() { }

  ngOnInit() { }

  login() {
    const values = this.loginForm.value;
    this.loginCredentials.emit(values);
  }

}
