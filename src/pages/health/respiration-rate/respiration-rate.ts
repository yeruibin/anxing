import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RespirationRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respiration-rate',
  templateUrl: 'respiration-rate.html',
})
export class RespirationRatePage {

  testArray:string[]=[ '日','周' ,'月' ,'年' ];
  testSegment:string=this.testArray[0];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespirationRatePage');
  }

  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.testArray.indexOf(this.testSegment) < 3) {
        this.testSegment = this.testArray[this.testArray.indexOf(this.testSegment) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.testArray.indexOf(this.testSegment) > 0) {
        this.testSegment = this.testArray[this.testArray.indexOf(this.testSegment) - 1];
      }
    }
  }

}
