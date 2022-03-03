import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.scss']
})
export class EditTourComponent implements OnInit {
  tour = new Tour(0,'',0,'');
  id!:number
  constructor(private http: HttpClient, private tourService: TourService,private router:ActivatedRoute,private routerBack: Router) {
    this.router.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'))
      this.detailTour()
    })
  }

  ngOnInit(): void {
  }

  detailTour() {
    this.tourService.findById(this.id).subscribe(data => {
      this.tour = data;

    }, error => {

    })
  }

  edit() {
    this.tourService.edit(this.tour).subscribe(data =>{
      this.tour = data;
      alert("Edit success");
      this.routerBack.navigate(["/tour/list-tour"]);
    })
  }

}
