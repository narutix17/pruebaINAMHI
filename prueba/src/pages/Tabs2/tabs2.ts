import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { OtherPage2 } from '../otherPage2/otherPage2';

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html'
})
export class Tabs2Page {
	
	
	tabs=[{
		title:"otherpag2.1",
		page:OtherPage2,
		data:"titulo otherpage2.1"
	},
	{
		title:"otherpage2.2",
		page:OtherPage2,
		data:"titulo other page2.2"
	}];
	@ViewChild('myTabs2') tabRef: Tabs;

  constructor(public navCtrl: NavController, public events:Events) {
  	  this.events.publish("tabs2:created",this.tabs);
  	  this.events.subscribe("menu2:selected", index => {
  		console.log("este es el indice seleccionado ",index);
  		this.tabRef.select(index);
  	});

  }


}
