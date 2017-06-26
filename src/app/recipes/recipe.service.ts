import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Http, Headers } from '@angular/http';

@Injectable()

/**
 * Aqui é onde interagimos com data, retornar, guarda-la etc
 */
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Breaded pork loin', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',
      [ new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)

      ]),
    new Recipe('Buchada', 'Intestines (kidneys, liver and viscera) of a goat', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',[
      new Ingredient('Goat\'s Intestines', 2), new Ingredient('Boiled Vegetables', 1) ])
  ];

  constructor(private http: Http) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
  
  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(recipeOld: Recipe, recipeNew: Recipe){
    this.recipes[this.recipes.indexOf(recipeOld)] = recipeNew;
  }


  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebookangular-9e0b9.firebaseio.com/recipes.json', body, [ {headers : {headers}} ]);
  }

  fetchData(){

  }
}
