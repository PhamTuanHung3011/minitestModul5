import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";
import {Tour} from "../model/tour";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.scss']
})
export class DetailTourComponent implements OnInit {
tour=new Tour(0,'',0,'');
id!:number
  constructor(private http: HttpClient, private tourService: TourService,private router:ActivatedRoute) {
        this.router.paramMap.subscribe((param)=>{
          this.id = Number(<string>param.get('id'))
          this.detailTour()
          console.log("vao day roi",this.tour
          )
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

}
