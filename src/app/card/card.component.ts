import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  tipo = 'Teste';
  preco = 1000;


  getFullPrice(){
    return 'R$' + this.preco + ',00/Mês'
  }
}
