import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { AppComponent } from './app.component';
import { HeroService } from './heroes/hero-service/hero.service';

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
