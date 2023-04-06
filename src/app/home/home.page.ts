import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  media: number;
  constructor() {
    this.media = 0;
  }

  ngOnInit() {}

  async calcularMedia(n1: number, n2: number) {
    this.media = n1.value + n2.value;
  }
}
