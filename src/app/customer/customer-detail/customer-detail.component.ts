import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: any;
  @Output() customerChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  change() {

    this.customer.name = 'i changed the name';
    this.customerChanged.emit(this.customer);

  }
}
