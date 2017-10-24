import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

  }

}
