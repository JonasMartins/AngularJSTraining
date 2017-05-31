import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()

/**
 * Aqui é onde interagimos com data, retornar, guarda-la etc
 */
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://camo.githubusercontent.com/9e39276ad39fe3cda7ac61dd0f1560dc5ad1ab95/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f3737343835392f4769744875622d5265706f732f7465737464756d6d792f63726173687465737464756d6d792e6a7067',
      [ new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)

      ]),
    new Recipe('Dummy2', 'Dummy2', 'https://camo.githubusercontent.com/9e39276ad39fe3cda7ac61dd0f1560dc5ad1ab95/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f3737343835392f4769744875622d5265706f732f7465737464756d6d792f63726173687465737464756d6d792e6a7067',[])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
