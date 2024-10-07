import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items: string[] = [];
  constructor() {
    this.loadData();
  }

  async loadData(ev?: any) {
    let resp = await fetch('https://5fee-172-59-104-137.ngrok-free.app/lorem/10');
    let newItems = await resp.json();
    this.items = [...this.items, ...newItems];
    ev?.target.complete();
  }
}
