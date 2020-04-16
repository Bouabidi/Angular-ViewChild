# AngularViewChild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.
If we want to pass data from a child to a parent or a parent to a child component we can use @Input and @Output.
How to use it?

## Development server

git clone https://github.com/Bouabidi/Angular-ViewChild.git

cd Angular-ViewChild

npm install 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

ng g m customer

ng g c customer 

ng g c customer/customer-detail

add CustomerModule to app.module

## Passing Data from Parent to Child
#customer component

in customer.component.html add  <app-customer-detail [customer]="customer"></app-customer-detail>

in customer.component declare a new variable:  customer: any;

update ngOnInit
```javascript
ngOnInit(): void {
    this.customer = {
      name: 'fethi',
      address: {
        city: 'Frankfurt'
      }
    };
  }
```
#customer-detail component

add @Input()customer: any;

in the template 
```javacript
Name : {{customer.name}}

City : {{customer.address.city}}
```

# app.module

add  <app-customer></app-customer>

## Passing Data from Child to Parent


#customer-detail component:

add @Output() customerChanged = new EventEmitter<any>();
  
in customer-detail.html add 

<button (click)="change()"><change customer</button>

use the EventEmitter to send a data:
```javascript
add change(){
this.customer.name = "i changed the name";
this.customerChanged.emit(this.customer);
}
```
#customer component

update customer.html by adding (customerChanged)="change($event)"

add the function

```javascript
changed(customer: any) {
this.customer= customer;
}
```


