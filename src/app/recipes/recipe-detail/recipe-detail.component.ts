import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  private recipeIndex: number = 1;

  constructor(private sls: ShoppingListService, private router: Router ) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }
  onDelete(){
    this.router.navigate(['/recipes']);
  }

}
