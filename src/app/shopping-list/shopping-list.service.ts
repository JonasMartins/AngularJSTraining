import { Ingredient } from "../shared/ingredient";

export class ShoppingListService {

  private items: Ingredient[] = []
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(itemsArgument: Ingredient[]){
    /* Adicionando todos os items passados por parametro ao array especificado no service */
    Array.prototype.push.apply(this.items, itemsArgument);
  }
}
