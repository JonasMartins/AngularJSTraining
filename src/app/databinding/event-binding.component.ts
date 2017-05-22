import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button>
  `,
  styles: []
})
export class EventBindingComponent {

  @Output() clicked = new EventEmitter<string>();

  onClicked(){
    //alert('it worked!');
    this.clicked.emit('It Works!');
  }
}
