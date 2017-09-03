import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data = {
    birth_year: '',
    created: '',
    edited: '',
    eye_color: '',
    films: '',
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    species: '',
    starships: '',
    url: '',
    vehicles: ''
  };

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public dataService:DataService
  ) {
    let category:string;
    let id:string;
    this.route.params.subscribe((params:Params) => {
      console.log('THE DATA VARIABLE', this.data);
      console.log(params);
      category = params.category;
      id = params.id;
      this.dataService.fetchDetails(category, id).subscribe((results) => {
        this.data = results;
        console.log('THE DATA VARIABLE', this.data);
      })
    })
  }

  ngOnInit() {
  }

}
