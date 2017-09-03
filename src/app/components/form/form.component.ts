import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public dataService:DataService) {
    this.renderData(this.baseUrl, this.searchTerm, this.pageNumber);
  }

  baseUrl:string = 'https://swapi.co/api/';
  searchTerm:string = 'people';
  pageNumber:number = 1;
  data:any;
  maxPages:number;
  prevButtonDisabled:boolean = true;
  nextButtonDisabled:boolean = false;

  renderData(url, search, pageNum) {
    this.dataService.fetchData(url, search, pageNum).subscribe((results) => {
      console.log(results);
      this.maxPages = Math.ceil(results.count / 10);
      console.log('NUMBER OF PAGES', this.maxPages);
      this.data = results.results;
    })
  }

  ngOnInit() {
    if (this.maxPages === 1) {
      this.nextButtonDisabled = true;
    }
  }

  handleChange(e) {
    this.searchTerm = e.target.value;
    this.pageNumber = 1;
    this.prevButtonDisabled = true;
    this.renderData(this.baseUrl, this.searchTerm, this.pageNumber);
  }

  getPrev() {
    this.pageNumber -= 1;
    this.nextButtonDisabled = false;
    if (this.pageNumber === 1) {
      this.prevButtonDisabled = true;
    } else {
      this.prevButtonDisabled = false;
    }
    this.renderData(this.baseUrl, this.searchTerm, this.pageNumber);
  }

  getNext() {
    this.pageNumber += 1;
    this.prevButtonDisabled = false;
    if (this.pageNumber >= this.maxPages) {
      this.nextButtonDisabled = true;
    }
    this.renderData(this.baseUrl, this.searchTerm, this.pageNumber);
  }

}
