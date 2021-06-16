import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { FCMPluginOnIonic } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
@Injectable({
  providedIn: 'root',
})
export class FcmService {
  constructor(
    private platform: Platform,
    private fcm: FCMPluginOnIonic,
    private toastCtrl: ToastController
  ) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.fcm.getToken();
    }
    if (this.platform.is('ios')) {
      token = await this.fcm.getToken();
      const perm = await this.fcm.requestPushPermission();
    }

    return this.saveTokenToFireStore(token);
  }

  private saveTokenToFireStore(token) {
    console.log('token is ==>', token);
  }

  listenToNotification() {
    return this.fcm.onNotification().subscribe((data) => {
      console.log('Notification Data', data);
      if (data.wasTapped) {
        console.log('Received in background');
      } else {
        this.toastCtrl
          .create({
            message: data.body,
            duration: 3000,
          })
          .then((toastEl) => toastEl.present());
        console.log('Received in foreground');
      }
    });
  }

  refreshToken() {
    // refresh the FCM token
    this.fcm.onTokenRefresh().subscribe((token) => {
      console.log('refreshed token', token);
    });
  }
}
