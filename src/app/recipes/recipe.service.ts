import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

/**
 * Aqui é onde interagimos com data, retornar, guarda-la etc
 */
export class RecipeService {

  recipeChanged = new EventEmitter<Recipe[]>();
  
  private recipes: Recipe[] = []; /* vazio, sempre tem que buscar antes */
  /*
    new Recipe('Schnitzel', 'Breaded pork loin', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',
      [ new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)

      ]),
    new Recipe('Buchada', 'Intestines (kidneys, liver and viscera) of a goat', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',[
      new Ingredient('Goat\'s Intestines', 2), new Ingredient('Boiled Vegetables', 1) ])
     ];

   */
  

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    
    console.log(Array.isArray(body));

    return body || { };
  }

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
    /* put sobrescreve o json no firebase anterior, se for apenas post, toda vez que formos salvar um recipe, 
    seria criado um novo nó */
    return this.http.put('https://recipebookangular-9e0b9.firebaseio.com/recipes.json', body, [ {headers : {headers}} ]);
  }

  fetchData() {
    return  this.http.get('https://recipebookangular-9e0b9.firebaseio.com/recipes.json').map(
      this.extractData).subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipeChanged.emit(this.recipes);
          }
        );

  }


}
