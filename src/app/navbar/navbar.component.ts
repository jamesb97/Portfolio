import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Blog = 'Blog';
  BlogLink = 'https://techblog-e0db2.web.app/';
  Projects = 'Projects';
  About = 'About';
  Contact = 'Contact';
  title = 'Portfolio';
  ToHome() {
    window.scrollTo(0, 0);
  }
}
