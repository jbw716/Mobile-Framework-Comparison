import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { LoremService } from '../services/lorem.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public lorem: string[] = [];

  constructor(public loremService: LoremService) {
    this.loadMore();
  }

  async loadMore(ev?: any) {
    this.lorem.push(...await this.loremService.getLorem());
    if (ev) {
      ev.target.complete();
    }
  }

  async refresh(ev?: any) {
    this.lorem = [];
    this.loadMore();
    if (ev) {
      ev.target.complete();
    }
  }
}
