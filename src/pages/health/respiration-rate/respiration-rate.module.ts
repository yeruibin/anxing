import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RespirationRatePage } from './respiration-rate';

@NgModule({
  declarations: [
    RespirationRatePage,
  ],
  imports: [
    IonicPageModule.forChild(RespirationRatePage),
  ],
})
export class RespirationRatePageModule {}
