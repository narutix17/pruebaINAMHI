import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Grid} from '../grid/grid'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	mydate;

  constructor(private datePipe: DatePipe,public navCtrl: NavController) {
    

  	let datenow=new Date();
  	console.log(datenow.getFullYear());
  	//this.mydate=datenow.getFullYear()+'-'+datenow.getMonth()+'-'+datenow.getDate();
  	this.mydate=this.datePipe.transform(datenow,'yyyy-MM-dd');
  }

  clickGrid(){
    this.navCtrl.push(Grid);
  }

}
