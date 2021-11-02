import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 @Input() public parentData: any;
 @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  fireEvent(){
    this.childEvent.emit( `hey ${this.parentData} how are you`);
  }
}
