import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service/hero.service'; 

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    providers: [HeroService]
})
 
export class HeroDetailComponent{
    @Input() hero: Hero;
    @Output() myEvent = new EventEmitter();
    
    constructor(private heroService: HeroService){}

    closeComponent(){
    	this.hero = null;
    	this.myEvent.emit(null);
    }

    deleteSelectedHero(id: number){
    	this.heroService.deleteHero(id);
    	this.closeComponent();
    }
}