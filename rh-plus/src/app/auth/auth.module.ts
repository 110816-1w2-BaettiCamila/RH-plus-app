import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { LoginPageComponent } from "./containers/login.page/login.page.component";

@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ]
})

export class AuthModule { }