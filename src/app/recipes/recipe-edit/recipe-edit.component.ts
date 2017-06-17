import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    let isNew = true;
    this.subscription = this.route.params.subscribe(
      (params: any) => {        
          if (params.hasOwnPorperty('id')){
            isNew = false;
            this.recipeIndex = +params['id']

          } else {
            isNew = true;
          }
        }
     
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}