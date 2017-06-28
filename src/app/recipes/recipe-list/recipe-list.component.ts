import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
   
  constructor(private recipeServiceLocal: RecipeService) { }

  /* Sempre atualizando a lista de recipes quando for feita alguma iteração com o firebase */

  ngOnInit() {
    this.recipes = this.recipeServiceLocal.getRecipes();
    /* subscribe significa, me informe quando algum evento for disparado */
    this.recipeServiceLocal.recipeChanged.subscribe(
      (recipes_come_from_srevice: Recipe[]) => this.recipes = recipes_come_from_srevice

      );
  }

}
