import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonList,
    IonItem,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule
  ],
})
export class HomePage {
  public items: string[] = [];
  constructor() {
    this.loadData();
  }

  async loadData(ev?: any) {
    let resp = await fetch('https://79c6-172-59-104-137.ngrok-free.app/lorem/10');
    let newItems = await resp.json();
    this.items = [...this.items, ...newItems];
    ev?.target.complete();
  }
}
