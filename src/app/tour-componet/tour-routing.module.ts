import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTourComponent} from "./create-tour/create-tour.component";
import {EditTourComponent} from "./edit-tour/edit-tour.component";
import {DeleteTourComponent} from "./delete-tour/delete-tour.component";
import {ListTourComponent} from "./list-tour/list-tour.component";
import {DetailTourComponent} from "./detail-tour/detail-tour.component";


const routes: Routes = [
  { path: 'create-tour', component: CreateTourComponent },
  { path: 'edit-tour/:id', component: EditTourComponent },
  { path: 'delete-tour/:id', component: DeleteTourComponent },
  { path: 'list-tour', component: ListTourComponent },
  { path: 'detail-tour/:id', component: DetailTourComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
