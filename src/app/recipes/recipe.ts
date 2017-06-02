import { Ingredient } from "../shared/ingredient";
export class Recipe {

/* comando para criar classes: ng g cl recipe*/
  constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]){
    
  }
}
