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
  asd = false;
  selectAll = false;
  selectAllIcon = { icon: 'check_box_outline_blank', color: 'gray' };
  title = 'app';
  heroes = [
    { name: '123123', tick: true },
    { name: '5657', tick: true },
    { name: 'trhfth', tick: false },
    { name: '1231fthdas23', tick: true },
  ];

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
    console.log(this.heroes);
  }

  toggle(item) {
    if (item.tick) {
      item.tick = false;
    } else {
      item.tick = true;
    }
    let count = 0;
    this.heroes.forEach(element => {
      if (element.tick) {
        count++;
      }
    });
    if (count === 0) {
      this.selectAllIcon = { icon: 'check_box_outline_blank', color: 'gray' };
    } else if (count === this.heroes.length) {
      this.selectAllIcon = { icon: 'check_box', color: '' };
    } else {
      this.selectAllIcon = { icon: 'indeterminate_check_box', color: '' };
    }
  }


  selectAllfunc() {
    if (this.selectAll) {
      this.selectAll = false;
      this.selectAllIcon = { icon: 'check_box_outline_blank', color: 'gray' };
      this.heroes.forEach(element => {
        element.tick = false;
      });
    } else {
      this.selectAll = true;
      this.selectAllIcon = { icon: 'check_box', color: '' };
      this.heroes.forEach(element => {
        element.tick = true;
      });
    }
  }


}
