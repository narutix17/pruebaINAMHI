import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,AlertController, ViewController} from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Network } from '@ionic-native/network';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';



@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {

  form={username:"",password:""};
  temp={username:"rdsua",password:"123"}
  url="https://simpleinamhiapi.herokuapp.com/auth";
  usuarioVinculado;

  constructor(private secureStorage: SecureStorage,private storage: Storage, public navCtrl: NavController, public navParams:NavParams,public http:HTTP,public network:Network,public loadingCtrl:LoadingController, public alertCtrl: AlertController) {
    // Obteniendo usuario vinculado.
    this.storage.get('linkedUser').then((val) => {
      if (val) {
        this.usuarioVinculado=val;
      }
    });
  }

  attemptAuth() { 
    const loader = this.loadingCtrl.create({
      content: "Espere ...",
    });
    loader.present();
    if (this.usuarioVinculado) {
      console.log('attemptloginVinculado');

      if (this.form.password==this.usuarioVinculado.clave) {
        // code...
        loader.dismiss();
        const alertador = this.alertCtrl.create({
          title: 'Credenciales Correctas!',
          subTitle: 'Has ingresado correctamente',
          buttons: ['OK']
        });
        alertador.present();
        this.navCtrl.setRoot(HomePage);

      }
      else{
        loader.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Credenciales incorrectas!',
          subTitle: 'Intentelo de nuevo',
          buttons: ['OK']
        });
        alert.present();
      }
      /*
      this.secureStorage.create('security')
      .then((storage: SecureStorageObject) => {
        storage.get('password').then(
             data => {
               console.log('dfadadafa');
               if (this.form.password==data) {
                 console.log('claves iguales ');
                 loader.dismiss();
                 const alertador = this.alertCtrl.create({
                  title: 'Credenciales Correctas!',
                  subTitle: 'Has ingresado correctamente',
                  buttons: ['OK']
                });
                alertador.present();
                this.navCtrl.setRoot(HomePage);
               }
               else{
                 const alert = this.alertCtrl.create({
                  title: 'Credenciales incorrectas!',
                  subTitle: 'Intentelo de nuevo',
                  buttons: ['OK']
                });
                alert.present();
               }
             },
             error => console.log(error)
         );
      });
      */

    }
    else{
      this.http.get(this.url, {usuario:this.form.username,clave:this.form.password}, {})
      .then(data => {
        loader.dismiss();
        const alertador = this.alertCtrl.create({
          title: 'Credenciales Correctas!',
          subTitle: 'Has ingresado correctamente',
          buttons: ['OK']
        });
        alertador.present();

        //Guardando clave de forma encriptada del usuario vinculado.
        this.secureStorage.create('security')
        .then((storage: SecureStorageObject) => {
           storage.set('password', this.form.password)
             .then(
              data => console.log("set1 secure passwords:",data),
               error => console.log(error)
           );
        });

        //Guardando informacion del usuario vinculado.
        this.storage.set('linkedUser', {username:this.form.username,clave:this.form.password,data:JSON.parse(data.data)[0]});
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        loader.dismiss();
        if (error.status == 403) {
            const alert = this.alertCtrl.create({
              title: 'Credenciales incorrectas!',
              subTitle: 'Intentelo de nuevo',
              buttons: ['OK']
            });
            alert.present();
        }
        else{
          const alert = this.alertCtrl.create({
              title: 'No hay Conexion a Internet',
              subTitle: 'Vinculate accediendo la primera vez con internet. Una vez vinculado podras acceder sin internet',
              buttons: ['OK']
            });
            alert.present();
        }

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });

    }
    
    

  }

  ionViewDidEnter(){

  }

  desvincular(){
    const confirm = this.alertCtrl.create({
      title: 'Seguro que quieres desvincular esta cuenta?',
      message: 'Al desvincular se removera la vinculacion actual y deberas volver a vincularte cuando obtengas una conexion a internet',
      buttons: [
        {
          text: 'Desvincular',
          handler: () => {
            console.log('Desvincular clicked');
            this.storage.clear().then(()=>{
              this.usuarioVinculado=null;
              this.secureStorage.create('security')
              .then((storage: SecureStorageObject) => {
                storage.clear();
              });

            });
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar');
          }
        }
      ]
    });
    confirm.present();
  }

}