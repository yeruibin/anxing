import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { ChatMessagePage } from '../chat-messages/chat-messages';
import  {ChatMessagesPage} from "../chat-messages/chat-messages";

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})
export class MinePage {
  // 设置默认选中页面
  public tabs: string = 'dynamicState';

  constructor(public alertCtrl: AlertController,nav: NavController) {
  }

  getAlert() {
    let alert = this.alertCtrl.create({
      title: '添加身份认证',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: '医护人员',
          value: 'value1',
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: '维修人员',
          value: 'value2'
        }
      ],
      buttons: [{
        text: '取消',
      },{text:'保存'}]
    });
    alert.present();
  }
  edit(){
    let confirm = this.alertCtrl.create({
      title: '清除缓存',
      message: '确认清除吗？',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '清除',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  viewMessages(){

  }

}
