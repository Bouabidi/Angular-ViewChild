import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';



@NgModule({
  declarations: [CustomerComponent, CustomerDetailComponent],
  exports: [CustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
