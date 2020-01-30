import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childchild',
  templateUrl: './childchild.component.html',
  styleUrls: ['./childchild.component.css']
})
export class ChildchildComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('    childChild (ngOnInit)' + this.name);
  }

  ngOnChanges(){
    console.log('    childChild (ngOnChanges)' + this.name);
  }

  ngAfterContentInit(){
    console.log('    childChild (ngAfterContentInit)' + this.name);
  }

}
