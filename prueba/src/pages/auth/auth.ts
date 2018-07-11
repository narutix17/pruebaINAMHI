import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,AlertController} from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';
import { HTTP } from '@ionic-native/http';
import { Network } from '@ionic-native/network';



@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

	form={username:"",password:""};
	temp={username:"rdsuarez",password:"1234"}
  dataNetwork;
  errorNetwork;
  url="https://simpleinamhiapi.herokuapp.com/auth";

  constructor(public navCtrl: NavController, public navParams:NavParams,public http:HTTP,public network:Network,public loadingCtrl:LoadingController, public alertCtrl: AlertController) {
  	
  }


  clickOtherPage(){
  	this.navCtrl.push(OtherPage);
  }

  get(){
    this.http.get(this.url, {usuario:this.form.username,clave:this.form.password}, {})
    .then(data => {
      this.dataNetwork=JSON.stringify(data);
      this.errorNetwork=null;
      console.log(data.status);
      console.log(typeof data.data); // data received by server
      console.log(data.headers);
      console.log(JSON.stringify(data));
      console.log(data.url);

    })
    .catch(error => {
      this.errorNetwork=JSON.stringify(error);
      this.dataNetwork=null;
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });

  }

  ionViewDidEnter(){
    console.log(this.network.type);
    alert('didenter');
    
  }


  attemptAuth() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    this.http.get(this.url, {usuario:this.form.username,clave:this.form.password}, {})
    .then(data => {
      loader.dismiss();
      this.dataNetwork=JSON.stringify(data);
      this.errorNetwork=null;
      console.log(data.status);
      console.log(typeof data.data); // data received by server
      console.log(data.headers);
      console.log(JSON.stringify(data));
      console.log(data.url);

    })
    .catch(error => {
      loader.dismiss();
      if (error.status == 403) {
        // code...
          const alert = this.alertCtrl.create({
            title: 'Credenciales incorrectas!',
            subTitle: 'Intentelo de nuevo',
            buttons: ['OK']
          });
          alert.present();
      }
      this.errorNetwork=JSON.stringify(error);
      this.dataNetwork=null;
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });

  }

}
