import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()

/**
 * Aqui é onde interagimos com data, retornar, guarda-la etc
 */
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Breaded pork loin', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',
      [ new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)

      ]),
    new Recipe('Buchada', 'Intestines (kidneys, liver and viscera) of a goat', 'http://receitasdecomidas.com.br/wp-content/uploads/buchada-de-bode.jpg',[
      new Ingredient('Goat\'s Intestines', 2), new Ingredient('Boiled Vegetables', 1) ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
