import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private  heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;
  constructor() {
  	this.heroHeading =  "We are your ultimate Winter experience Provider!";
  this.heroText =  "With hundreds of winter holiday destination offered, we are your natural choice for planning it all out!";
  this.heroBtnText =  "Learn more";
  this.heroBtnUrl =  "https://codefactory.wien" ; 
}

  ngOnInit() {
  }

}
