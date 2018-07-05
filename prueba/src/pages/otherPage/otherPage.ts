import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Tabs2Page } from '../tabs2/tabs2';


@Component({
  selector: 'page-otherPage',
  templateUrl: 'otherPage.html'
})
export class OtherPage {

  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	
  }

  clickTabs2(){
  	this.navCtrl.push(Tabs2Page);
  }

}
