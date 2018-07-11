import { Component,ViewChild} from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavController,Platform, Tabs } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('prueba') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  data={message:'hola'};

  constructor(public navCtrl: NavController,public plt: Platform) {
    
    plt.ready().then(function(){
      
    })
  }

  ionViewDidEnter() {
    //this.data={viewCtrl:this.tabRef.viewCtrl};
    //console.log(document.getElementById('prueba2'));
    //document.getElementById('prueba2').getElementsByClassName('tabbar')[0].classList.add('show-tabbar');
    //this.tabRef.select(0);
   }
}
