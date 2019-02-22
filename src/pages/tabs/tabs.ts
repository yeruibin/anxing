import { Component } from '@angular/core';

import { FindPage } from '../find/find';
import { MinePage } from '../mine/mine';
import { HealthPage } from '../health/health';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HealthPage;
  tab2Root = FindPage;
  tab3Root = MinePage;

  constructor() {

  }
}
