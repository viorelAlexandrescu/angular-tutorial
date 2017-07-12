import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService } from './heroes/hero-service/hero.service';

@NgModule({
	imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule],
	declarations: [AppComponent, DashboardComponent, 
					HeroDetailComponent, HeroesComponent],
	providers: [HeroService],
	bootstrap: [AppComponent],
})

export class AppModule { }
