import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  headingAbt: string = "Our Team";
  textAbt: string = "My name is Christine and at the moment I am a one-woman-operated agency, so I am the CEO, CFO, Travel Agent, Designer, Developer and Marketing Specialist :) feel free to contact me:";
  emailAbt: string = "chri@weid.com"
}
