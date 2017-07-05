import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero-service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})


export class AppComponent implements OnInit {
	title: 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService){}

	ngOnInit(){
		this.heroes = this.heroService.getDummyHeroes();
	}

	onSelect(newHero: Hero){
		this.selectedHero = newHero;
	}
}
