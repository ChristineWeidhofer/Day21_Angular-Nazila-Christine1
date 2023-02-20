import { Component } from '@angular/core';

@Component({
  selector: 'hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.css']
})
export class HeroHomeComponent {
  heroHeading: string =  "Christine\'s Travel";
  heroText: string  =  "Come with us to your favourite destination!";
  heroBtnText: string =  "Learn more";
  heroBtnUrl: string =  "/about";

}
