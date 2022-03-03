import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss']
})
export class CreateTourComponent implements OnInit {

  formCreate!: FormGroup;

  constructor(private http: HttpClient, private tourService: TourService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      nameTour: new FormControl("", Validators.minLength(6)),
      priceTour: new FormControl(0, Validators.pattern('[1-4]')),
      descriptionTour: new FormControl("")

    })
  }


  create() {
    this.tourService.create(this.formCreate.value).subscribe(data =>{
      alert("create Ok")
      this.router.navigate(["/tour/list-tour"]);
    })
  }

}
