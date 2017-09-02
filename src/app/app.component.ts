import { Component } from '@angular/core';

import { DataService } from './services/data.service';

import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dataService:DataService) {}

}
