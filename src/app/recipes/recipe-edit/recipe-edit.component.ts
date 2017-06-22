import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../recipe';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipeForm: FormGroup;
  private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {        
          if (params.hasOwnPorperty('id')){
            this.isNew = false;
            this.recipeIndex = +params['id']
            this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          } else {
            this.isNew = true;
            this.recipe = null;
          }
        }
     
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean){
    let recipeName = '';
    let recipeImageURL = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);
  
    if (!this.isNew) {
      for(let  i=0; i< this.recipe.ingredients.length; i++){
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
            /* validators \\d+ significa adicionar apenas numeros como entrada */
            amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")])
            })
          );
      }

      recipeName = this.recipe.name;
      recipeImageURL = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageURL, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });

  }  

}