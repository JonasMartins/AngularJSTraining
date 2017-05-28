import { Ingredient } from "../shared/ingredient";
export class Recipe {

/* comando para criar classes: ng g cl recipe*/
  constructor(public name, public description, public imagePath, public ingredients: Ingredient[]){
    
  }
}
