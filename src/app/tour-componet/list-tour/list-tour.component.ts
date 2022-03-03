import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";


@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.scss']
})
export class ListTourComponent implements OnInit {

  public tours: Tour[] = [];


  constructor(private http: HttpClient, private tourService: TourService) {
    this.findAll();
  }

  tour: Tour = new Tour(0, "",0,"")
  ngOnInit(): void {
  }

  findAll() {
    this.tourService.findAll().subscribe(data => {
      this.tours = data;
    }, error => {

    })
  }



  searchTour(value:string) {
    this.tourService.findAllByName(value).subscribe(data => {
      this.tours = data;
      console.log("data")
      console.log(data)

    }, error => {
    this.findAll();
    })
  }
}
