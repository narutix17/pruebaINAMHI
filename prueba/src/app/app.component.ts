import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  menuList;
  menuList2;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events:Events) {
    this.events.subscribe("tabs:created",(tabs)=>{
      this.menuList=tabs;
      console.log('tabs:created evento recibido en menu');
      console.log(this.menuList);
    });
    this.events.subscribe("tabs2:created",(tabs)=>{
      this.menuList2=tabs;
      console.log('tabs:created evento recibido en menu');
      console.log(this.menuList2);
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  clickItemMenu(index){
    this.events.publish("menu:selected",index);
  }

  clickItemMenu2(index){
    this.events.publish("menu2:selected",index);
  }
}

