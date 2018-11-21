import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Camera} from "@ionic-native/camera";
import {File} from "@ionic-native/file";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {HttpService} from "../services/httpService";
import {TestPage} from "../pages/test/test";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {Network} from "@ionic-native/network";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    HttpService,
    PhotoViewer,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
