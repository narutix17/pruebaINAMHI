import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';


@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

	form={username:"",password:""};
	temp={username:"rdsuarez",password:"1234"}

  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	
  }

  clickOtherPage(){
  	this.navCtrl.push(OtherPage);
  }


}
