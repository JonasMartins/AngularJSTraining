import { Component } from '@angular/core';

/* Como adicionar metadata a uma classe, metadata são informações adicionais */
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <app-other></app-other>
  //   <app-another></app-another>
  // `,
  styleUrls: ['./app.component.css']
})

/* ROOT COMPONENT */
export class AppComponent {
  title = 'Change This Dynamically!';
}