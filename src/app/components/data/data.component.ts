import { Component, OnInit, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input() formComponet:FormComponent;
  @Input('data') data:any[];
  @Input('pageNumber') pageNumber:number;
  @Input('searchTerm') searchTerm:string;
  constructor() {}

  ngOnInit() {}

}
