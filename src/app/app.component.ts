import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  // Getting the reference
  @ViewChild(ChildComponent, { static: false }) hello: ChildComponent;
  @ViewChildren(HelloComponent) myValues: QueryList<HelloComponent>;
  @ViewChild('myButton', { static: false }) myValue: ElementRef;
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    console.log('Hello', this.hello.componentName);
    console.log('Hello', this.myValue.nativeElement);
    console.log('Hello Views ', this.myValues.toArray());
  }

}
