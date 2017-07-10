import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	private title: string;

	constructor() {
		this.title = 'Tour Of Heroes';
	}

	ngOnInit() {}
}
