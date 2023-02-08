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
  TelegramImg = '../../assets/images/2111710.png';
  GitHub = 'https://github.com/jamesb97/';
  GitHubImg = '../../assets/images/733609.png';
  LinkedIn = 'https://www.linkedin.com/in/zdravkobozhkov/';
  LinkedInImg = '../../assets/images/1384014.png';
  Twitter = 'https://twitter.com/zdravko6t5/';
  TwitterImg = '../../assets/images/2168336.png';
  Instagram = 'https://instagram.com/zbozhkov/';
  InstagramImg = '../../assets/images/3670274.png';

  currentYear: number = new Date().getFullYear();
}
