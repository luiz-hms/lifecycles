import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('Init');
  }

  ngOnchanges() {
    console.log('Changes');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    console.log('doChek');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentInit() {
    console.log('ContentInit');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentChecked() {
    console.log('ContentChecked');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('ViewInit');
  }

  // tslint:disable-next-line: adjacent-overload-signatures
  ngAfterViewChecked() {
    console.log('ViewChecked');
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    console.log('Destroy');
  }

}
