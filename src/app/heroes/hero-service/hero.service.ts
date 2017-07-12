import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from '../hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
  apiUrl = 'http://localhost:3000/api/heroes';

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    function parseHeroes(heroObject){
      let incomingHeroList = JSON.parse(heroObject).heroes,
          finalHeroList = [];
      for(let i = 0; i < incomingHeroList.length; i++){
        let newHero = new Hero(incomingHeroList[i]._id, incomingHeroList[i]._name);
        finalHeroList.push(newHero);
      }
      return finalHeroList;
    }

    return this.http.get(this.apiUrl)
                  .toPromise()
                  .then(response => parseHeroes(response.json()))
                  .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    function parseHero(heroObject){
      let incomingHeroObject = JSON.parse(heroObject).hero,
          finalHeroObject;
      return new Hero(incomingHeroObject._id, incomingHeroObject._name);
    }

    let heroQueryUrl = this.apiUrl + '/getHero/' + id;
    return this.http.get(heroQueryUrl)
                    .toPromise()
                    .then(response => parseHero(response.json()))
                    .catch(this.handleError);
  }
  
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}