import { Component } from '@angular/core';
import { transition, trigger, query, stagger, animate, state, style, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        animate(100, keyframes([
          style({ opacity: 0, transform: 'translateY(5px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  count = 0;
  showArray = [];

  title = 'app';
  heroes = ['Alpha', 'Bravo', 'Charlie', 'Delta',
    'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo',
    'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Qubec', 'Romio', 'Sierra'];

  constructor() {
    this.pushData();
  }

  pushData() {
    if (this.count < 7) {
      this.showArray.push(this.heroes[this.count]);
      this.count++;
    }
  }
   pushData2() {
      this.showArray.push(this.heroes[this.count]);
      this.count++;
  }

}
