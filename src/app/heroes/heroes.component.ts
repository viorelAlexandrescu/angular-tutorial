import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service/hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})


export class HeroesComponent implements OnInit {
	title: 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
		){}

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(newHero: Hero){
		this.selectedHero = newHero;
	}

	gotoDetail(){
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
