import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  goRegister(){
    this.navCtrl.push(RegisterPage)
  }
  goFind(){
    this.navCtrl.push(TabsPage)
  }
}
