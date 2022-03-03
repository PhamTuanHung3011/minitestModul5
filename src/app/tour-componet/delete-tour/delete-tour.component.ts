import { Component, OnInit } from '@angular/core';
import {Tour} from "../model/tour";
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-tour.component.html',
  styleUrls: ['./delete-tour.component.scss']
})
export class DeleteTourComponent implements OnInit {
  tour=new Tour(0,'',0,'');
  id!:number
  constructor(private http: HttpClient, private tourService: TourService,private router:ActivatedRoute, private routerBack: Router) {
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

  delete() {
    this.tourService.delete(this.id).subscribe(data => {
      alert("Delete success");
      this.routerBack.navigate(["/tour/list-tour"]);
    })
  }

}
