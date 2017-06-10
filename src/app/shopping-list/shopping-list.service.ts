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

  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient){

    this.items[this.items.indexOf(oldItem)] = newItem;

  }

  deleteItem(item: Ingredient){
    this.items.splice(this.items.indexOf(item), 1);
  }

}
