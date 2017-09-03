import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {}

  fetchData(url, searchTerm, pageNum) {
    return this.http.get(`${url}${searchTerm}?page=${pageNum}`).map((response) => {
      return response.json();
    });
  }

  fetchDetails(category, id) {
    return this.http.get(`https://swapi.co/api/${category}/${id}`).map((response) => {
      return response.json();
    })
  }

}
