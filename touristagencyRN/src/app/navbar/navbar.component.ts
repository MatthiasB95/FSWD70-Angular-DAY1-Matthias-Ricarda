import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	private projectName: string;

  constructor() { 
  	this.projectName="Winter Tour";
  }

  ngOnInit() {
  }

}
