import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './heroes/hero-service/hero.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, AppRoutingModule],
	declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
	providers: [HeroService],
	bootstrap: [AppComponent],
})

export class AppModule { }
