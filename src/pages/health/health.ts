import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-health',
  templateUrl: 'health.html'
})
export class HealthPage {

  testArray:string[]=[ '历史数据','临时驾驶记录' ];
  testSegment:string=this.testArray[0];

  constructor(public navCtrl: NavController) {
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


  goHeartRate(){
    this.navCtrl.push('HeartRatePage');
  }

  goRespirationRate(){
    this.navCtrl.push('RespirationRatePage');
  }

  goBloodPressure(){
    this.navCtrl.push('BloodPressurePage');
  }

  goAttention() {
    this.navCtrl.push('AttentionPage');
  }

  goFatigue() {
    this.navCtrl.push('FatiguePage');
  }


}

