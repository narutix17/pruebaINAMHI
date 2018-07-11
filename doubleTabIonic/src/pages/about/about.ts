import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Grid} from '../grid/grid'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    

  }

  clickGrid(){
    this.navCtrl.push(Grid);
  }

}
