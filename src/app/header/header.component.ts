import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  MyName = "Hi, I'm Zdravko";
  Headline1 = 'A Software Engineer';
  Headline2 = 'with experience in';
  Headline3 = 'Front-End Development';
  Headline4 = 'Backend-Development, Cloud Computing & AI.';
  MyJourney = 'My Journey';
}
