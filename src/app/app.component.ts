import { Component } from '@angular/core';
import {hero} from "./hero";

@Component({
  selector: 'app-root',
  template:`
    <h1>{{title}}</h1>
    <div>
      <label>name: </label>
      <input [(ngModel)]="myhero.name" placeholder="aaa">
    </div>
    <h2>{{myhero.name}} is my favourite!</h2>
    <p *ngIf="heroes.length >= 3">There are many Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
      {{hero.id}}   {{hero.name}}
      </li> 
    </ul>
    `,
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [new hero(11,'X-man') , new hero(12,'Wolf') , new hero(13 , 'IceBird')];
  myhero = this.heroes[0];
}
