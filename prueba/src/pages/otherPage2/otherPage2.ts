import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-otherPage2',
  templateUrl: 'otherPage2.html'
})
export class OtherPage2 {
	dataMensajeTabs;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.dataMensajeTabs=navParams.data;
  }

}
