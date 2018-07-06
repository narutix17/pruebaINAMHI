import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
	indexSelected=2;
	hidden=true;
	tabs=[{
		title:"menu1",
		page:HomePage,
		data:"titulo menu1"
	},
	{
		title:"auth",
		page:AuthPage,
		data:"Autenticacion"
	},
	{
		title:"menu3",
		page:HomePage,
		data:"titulo menu3"
	}];
	tab1Root=HomePage;
	tab2Root=HomePage;
	tab3Root=HomePage;


	@ViewChild('myTabs') tabRef: Tabs;

  constructor(public navCtrl: NavController, public events:Events) {
  	this.events.publish("tabs:created",this.tabs);
  	this.events.subscribe("menu:selected", index => {
  		console.log("este es el indice seleccionado ",index);
  		this.tabRef.select(index);
  	});
  }

}
