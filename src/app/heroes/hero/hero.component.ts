import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

public name: string = 'venom';
public age:  number = 38;

get capitalizedName():string {
  return this.name.toUpperCase();

}

getHeroDescrpiton():string {
  return `${this.name} - ${this.age}`;
}


changeHero():void{

this.name = 'Spiderman';

}

changeAge():void{

  this.age = 18;

}

resetForm():void{
  this.name = 'venom';
  this.age = 38;
}
}
