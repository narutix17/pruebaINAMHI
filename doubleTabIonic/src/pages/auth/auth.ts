import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

  constructor(public navCtrl: NavController) {
    

  }

  submit(){
      this.navCtrl.push(AboutPage);
  }


}
