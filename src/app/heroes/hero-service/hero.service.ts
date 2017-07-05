import { Injectable } from '@angular/core';
import { Hero } from '../hero';

let HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService{
  
	getDummyHeroes(): Hero[] {
		return HEROES;
	}

  deleteHero(expendableHeroId: number){
    let length = HEROES.length;
    for(let i = 0; i < length; i++){
      if(HEROES[i].id == expendableHeroId){
        HEROES.splice(i, 1);
        break;
      }
    }
  }

}