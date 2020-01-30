import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  // tslint:disable-next-line: no-inferrable-types
  nextEventId: number = 0;

  colors: string[] = ['accent', 'warn', 'primary'];

  private intervalRef = null;

  constructor() {
    console.log(this.name + 'constructor');
    this.newEvent('construtor');
    this.intervalRef = setInterval(() => {console.log('interval')
  }, 2000);
  }

  ngOnInit() {
    console.log(this.name + 'ngOninit');
    this.newEvent('oninit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.name + 'Onchanges');
    this.newEvent('onchanges');
    if (changes.name) {
      console.log('new name:' + changes.name.currentValue);
    }
  }

  ngAfterContentInit() {
    console.log(this.name + 'Contentinit');
    this.newEvent('continit');
  }

  ngAfterViewInit() {
    console.log(this.name + 'Viewinit');
    this.newEvent('viewinit');
  }

  ngOnDestroy() {
    console.log(this.name + 'Destroy');
    this.newEvent('destroy');
    clearInterval(this.intervalRef);

  }

  newEvent(name: string) {
    const id = this.nextEventId++;
    this.events.push({
      // tslint:disable-next-line: object-literal-shorthand
      id: id,
      color: this.colors[id % this.colors.length],
      // tslint:disable-next-line: object-literal-shorthand
      name: name});
      // tslint:disable-next-line: align
      setTimeout(() => {
        let idx = this.events.findIndex((e) => e.id == id);
        if (idx >= 0) {
          this.events.splice(idx, 1);
        }
      }, 3000 + this.events.length * 2000);
  }

}
