import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Venom',
    'Thor',
  ];
  public deletedHero?:string;
// el pop ens fa borrar l'ultim
removeLastHero():void {
  this.deletedHero = this.heroNames.pop();


}

}
