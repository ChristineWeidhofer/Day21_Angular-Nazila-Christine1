import { Component } from '@angular/core';

@Component({
  selector: 'hero-about',
  templateUrl: './hero-about.component.html',
  styleUrls: ['./hero-about.component.css']
})
export class HeroAboutComponent {
  heroHeading: string =  "About Us";
  heroText: string  =  "Who are we and why should you book with us?";
  heroBtnText: string =  "Book a tour!";
  heroBtnUrl: string =  "https://gesar-travel.com";

}
