import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login.page',
  templateUrl: './login.page.component.html',
  styleUrls: ['./login.page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router,
    private alertController: AlertController) {

  }

  ngOnInit() { }

  loginEvent(params) {
    if (params.username === 'user' && params.password === 'root') {
      localStorage.setItem('current_employee_id', '3');
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.showLoginErrorAlert();
    }
  }

  private async showLoginErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Login Error',
      message: 'Usuario y/o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }

}
