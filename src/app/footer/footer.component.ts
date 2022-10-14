import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Contact';
  contactSubheading = "Let's create your next experience together";
  connectWithMe = 'CONNECT WITH ME';
  contactEmail = 'zdravko6t5@gmail.com';
  Telegram = 'https://t.me/zdravko6t5';
  GitHub = 'https://github.com/jamesb97/';
  LinkedIn = 'https://www.linkedin.com/in/zdravkobozhkov/';
  Twitter = 'https://twitter.com/zdravko6t5/';
  Instagram = 'https://instagram.com/zbozhkov/';

  currentYear: number = new Date().getFullYear();
}
