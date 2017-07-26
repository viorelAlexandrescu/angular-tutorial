import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero-service/hero.service'; 
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
    providers: [HeroService]
})
 
export class HeroDetailComponent implements OnInit {
    @Input() hero:Hero

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
        ){}

    ngOnInit(){
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(parseInt(params['id'])))
            .subscribe(hero => this.hero = hero);
    }

    saveChanges(): void {
        this.heroService.updateHero(this.hero);
        this.goBack();
    }

    goBack(): void {
        this.location.back();
    }
}