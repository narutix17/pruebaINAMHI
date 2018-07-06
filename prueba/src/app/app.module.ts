import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OtherPage } from '../pages/otherPage/otherPage';
import { OtherPage2 } from '../pages/otherPage2/otherPage2';

import { Tabs2Page } from '../pages/tabs2/tabs2';
import { AuthPage } from '../pages/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    OtherPage,
    Tabs2Page,
    OtherPage2,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    OtherPage,
    Tabs2Page,
    OtherPage2,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
