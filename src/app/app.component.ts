import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  oddArr: number[] = [];
  evenArr: number[] = [];

  getFiredNumber(num: number) {
    if (num % 2 === 0) {
      this.evenArr.push(num);
    }
    else {
      this.oddArr.push(num);
    }
  }
  reset(flag){
    this.evenArr=[];
    this.oddArr=[];
  }

}
