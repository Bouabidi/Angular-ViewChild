import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() componentName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
