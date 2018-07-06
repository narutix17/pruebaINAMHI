import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	dataMensajeTabs;
  pathFile;
  time;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  	this.dataMensajeTabs=navParams.data;
  	console.log('Passed params', navParams.data);
    console.log(this.pathFile);
    console.log(this.time);
  }

  clickOtherPage(){
  	this.navCtrl.push(OtherPage);
  }

  mostrarValueFile(){
    alert(this.pathFile);
    console.log(this.pathFile);
    console.log(this.time);
  }

}
