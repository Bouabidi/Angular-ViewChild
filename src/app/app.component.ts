import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  name = 'Angular';

}
