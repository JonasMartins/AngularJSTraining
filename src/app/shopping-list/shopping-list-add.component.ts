import { Component, OnChanges, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements  OnChanges {
  
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }
  /**
   * [ngOnChanges description]
   * @param {[type]} changes [description]
   *
   * Changes é coisa do angular 2, verifica se o objeto vindo de fora do componente foi alterado
   * neste caso sabemos que o item vem de fora assim podemos ajustar o isAdd para a 
   * ocasião correta. 
   */
  ngOnChanges(changes){
    if(changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {
        name: null, amount: null
      };
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient){
    if(!this.isAdd){

    } else {
      this.item = new Ingredient(ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    
    }
    
  }

}

