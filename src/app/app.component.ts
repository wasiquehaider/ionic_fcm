import { Component } from '@angular/core';
// import { FCMPluginOnIonic } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
import { Platform, ToastController } from '@ionic/angular';
import { FcmService } from './fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    // private fcm: FCMPluginOnIonic,
    private fcmService: FcmService,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  // ionViewDidLoad() {
  //   this.fcmService.getToken();

  //   this.fcmService.listenToNotification();
  // }

  initializeApp() {
    // install   ******"cordova-plugin-fcm-with-dependecy-updated": "^7.8.0"******
    // this.platform.ready().then(async () => {
    //   // get FCM token
    //   if (this.platform.is('ios')) {
    //     await this.fcm.requestPushPermission();
    //   }
    //   this.fcm.getToken().then((token) => {
    //     console.log('get token', token);
    //   });
    //   // ionic push notification example
    //   this.fcm.onNotification().subscribe((data) => {
    //     console.log(data);
    //     if (data.wasTapped) {
    //       console.log('Received in background');
    //     } else {
    //       this.toastCtrl
    //         .create({
    //           message: data.body,
    //           duration: 3000,
    //         })
    //         .then((toastEl) => toastEl.present());
    //       console.log('Received in foreground');
    //     }
    //   });
    //   // refresh the FCM token
    //   this.fcm.onTokenRefresh().subscribe((token) => {
    //     console.log(token);
    //   });
    // });
  }
}
