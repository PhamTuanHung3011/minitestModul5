import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTourComponent } from './create-tour/create-tour.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { DeleteTourComponent } from './delete-tour/delete-tour.component';
import {AppRoutingModule} from "./tour-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListTourComponent } from './list-tour/list-tour.component';
import {TourComponetComponent} from "./tour-componet.component";
import { DetailTourComponent } from './detail-tour/detail-tour.component';



@NgModule({
  declarations: [
    CreateTourComponent,
    EditTourComponent,
    DeleteTourComponent,
    ListTourComponent,
    TourComponetComponent,
    DetailTourComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class TourModule { }
