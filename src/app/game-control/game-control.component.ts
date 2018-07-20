import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>();

 @Output() resetFired = new EventEmitter();
  interval;
  lastValue: number=0;
  constructor() { }

  ngOnInit() {
  }

  startInterval() {
    this.interval = setInterval(() => {
               this.intervalFired.emit(this.lastValue+1);
               this.lastValue++;
    }, 1000);
  }

  pauseInterval(){
    clearInterval(this.interval);
  }

  resetInterval(){
    this.lastValue=0;
    clearInterval(this.interval);
    this.resetFired.emit(true);
  }

}
