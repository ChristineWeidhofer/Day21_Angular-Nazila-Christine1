import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardText: string = "Visit this special place with us! We will arrange an unforgettable travel experience for you!";
  btnText: string = "Book a tour!";
  btnLink: string = "/about";
  cardPrice: number = 1200;
}
