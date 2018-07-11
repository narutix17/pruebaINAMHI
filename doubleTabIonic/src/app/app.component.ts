import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { TabsPage } from '../pages/tabs/tabs';
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AuthPage;
  data=[{
    name:"General",
    collapse:true,
    expanded:false,
    children:[{label:"Principal",icon:"home"},{label:"Perfil",icon:"person"},{label:"Libretas Enviadas",icon:"cloud-upload"}]
  },{
    name:"General",
    collapse:true,
    expanded:false,
    children:[{label:"Principal",icon:"home"},{label:"Perfil",icon:"person"},{label:"Libretas Enviadas",icon:"cloud-upload"}]
  },{
    name:"",
    collapse:false,
    expanded:null,
    children:[{label:"Principal",icon:"home"},{label:"Perfil",icon:"person"},{label:"Libretas Enviadas",icon:"cloud-upload"}]
  }];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  click(algo){
    console.log(algo);
  }
  clickbutton(index,id,$event){
    /*
    let button=$event.currentTarget;
    console.log(this.data[index].expanded);
    console.log(button.getAttribute('aria-expanded'));


    if (button.getAttribute('aria-expanded')=="false") {
      this.data[index].expanded=true;
    }
    else{
      this.data[index].expanded=false;
    }
    */
    let element= document.getElementById(id);
    
    if (element.getAttribute('class')=="collapse") {
      this.data[index].expanded=true;
    }
    else if (element.getAttribute('class')=="collapse show") {
      this.data[index].expanded=false;
    }
    
    
    
  }
}
