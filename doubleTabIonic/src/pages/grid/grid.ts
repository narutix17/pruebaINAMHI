import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class Grid {

    gaming: string = "1";
    temperatura;

  constructor(public navCtrl: NavController) {

  }

  clickButton(){
      console.log(this.temperatura);
  }

}
