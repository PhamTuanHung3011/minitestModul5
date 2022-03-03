
export class Tour{
  id!: number;
  nameTour!: String;
  priceTour!: number;
  descriptionTour!: String;


  constructor(id: number, nameTour: String, priceTour: number, descriptionTour: String) {
    this.id = id;
    this.nameTour = nameTour;
    this.priceTour = priceTour;
    this.descriptionTour = descriptionTour;
  }


}
