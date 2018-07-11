import { Component,ViewChild } from '@angular/core';
import { NavController,Platform,NavParams,Tabs } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('tabsHome') tabRef: Tabs;

  tab1Root = AboutPage;
  tab2Root = ContactPage;
  constructor(public navCtrl: NavController,public plt: Platform,public navParams: NavParams) {
    
  }

  ionViewDidEnter() {
    //this.data={viewCtrl:this.tabRef.viewCtrl};
    //console.log(document.getElementById('prueba2'));
    document.getElementById('prueba2').getElementsByClassName('tabbar')[0].classList.add('show-tabbar');
    //this.tabRef.select(0);
    console.log(this.navParams.data);
   }

}
