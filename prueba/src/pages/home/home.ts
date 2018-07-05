import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	dataMensajeTabs;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.dataMensajeTabs=navParams.data;
  	console.log('Passed params', navParams.data);
  }

  clickOtherPage(){
  	this.navCtrl.push(OtherPage);
  }

}
