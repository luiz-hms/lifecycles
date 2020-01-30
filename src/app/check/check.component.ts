import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  private name: string = '';
  private age: number = 0;

  constructor() { }

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
