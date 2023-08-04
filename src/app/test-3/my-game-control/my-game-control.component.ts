import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-my-game-control',
  templateUrl: 'my-game-control.component.html',
  styleUrls: ['my-game-control.component.css']
})
export class MyGameControlComponent implements OnInit {
  intervalId: any;
  number: number = 0;
  @Output() numberCreated = new EventEmitter<{type: string; name: string}>();
  @Input('numElement') numberItem: {type: string, name: string};
  @ContentChild('odd', {static: true}) odd: ElementRef;
  @ContentChild('even', {static: true}) even: ElementRef;
  constructor() {
  }
  ngOnInit(): void {
  }
  handleStart() {
    this.intervalId = setInterval(() => {
      this.number += 1;
      if(this.number % 2 === 0) {
        this.numberCreated.emit({
          type: 'even',
          name: 'even'
        })
      } else {
        this.numberCreated.emit({
          type: 'odd',
          name: 'odd'
        })
      }
    }, 1000)
  }
  handleStop() {
    clearInterval(this.intervalId);
  }
}
