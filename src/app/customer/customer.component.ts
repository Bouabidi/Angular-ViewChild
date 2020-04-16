import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: any;

  constructor() { }

  ngOnInit(): void {
    this.customer = {
      name: 'fethi',
      address: {
        city: 'Frankfurt'
      }
    };
  }
  changed(customer: any) {
    this.customer = customer;
  }

}
