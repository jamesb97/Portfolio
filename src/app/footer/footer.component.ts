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
  contactEmail = 'rebrand.ly/5qcaxio';
  Telegram = 'https://t.me/zdravko6t5';
  TelegramImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/2111710.png?alt=media&token=897495cb-516b-4841-a8c8-1e41614baed4';
  GitHub = 'https://github.com/jamesb97/';
  GitHubImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/733609.png?alt=media&token=e1477b41-3f81-490a-ad91-ca7466de1fd0';
  LinkedIn = 'https://www.linkedin.com/in/zdravkobozhkov/';
  LinkedInImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/1384014.png?alt=media&token=30e3d1ab-a81d-4ce5-9b5f-3d3ecfc660d8';
  Twitter = 'https://twitter.com/zdravko6t5/';
  TwitterImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/2168336.png?alt=media&token=64268e5a-2bd5-4893-b1b4-f687af3635f3';
  Instagram = 'https://instagram.com/zbozhkov/';
  InstagramImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/3670274.png?alt=media&token=3b2c6d04-01e9-4aea-bc79-d6b5c5a6eff3';

  currentYear: number = new Date().getFullYear();
}
