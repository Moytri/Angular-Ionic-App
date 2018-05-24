import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { More } from '../pages/more/more';
import { FilmsPage } from '../pages/films/film';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavigationDetailsPage } from '../pages/details/details';


import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

// Http import
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { HttpModule, JsonpModule } from '@angular/http';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    FilmsPage,
    More,
    HomePage,
    TabsPage,
    NavigationDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot({
    name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
   })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    FilmsPage,
    More,
    HomePage,
    TabsPage,
    NavigationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    RedditDataProvider,
  ]
})
export class AppModule {}
