import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroHeading2: string;
private heroText: string;
private heroText2: string;
private heroBtnText: string;
private heroBtnUrl: string;

  constructor() { 
  this.heroHeading = "We are your ultimate ";
  this.heroHeading2 = "Winter experience Provider!";
  this.heroText =  "With hundreds of winter holiday destinations offered, we are";
  this.heroText2 =  "your natural choice for planning it all out!";
  this.heroBtnText =  "Learn more";
  this.heroBtnUrl =  "https://codefactory.wien" ;
  }
  ngOnInit() {
  }

}
