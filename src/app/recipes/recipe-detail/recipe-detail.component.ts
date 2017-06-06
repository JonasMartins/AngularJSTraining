import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;

  private recipeIndex: number = 1;
  private subscription: Subscription;


  constructor(private sls: ShoppingListService,
    private route: Router, 
    private router: ActivatedRoute,
    private recipeService: RecipeService 
    ) { }

  ngOnInit() {
    this.subscription =  this.router.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        }
      );
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.route.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.route.navigate(['/recipes']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
