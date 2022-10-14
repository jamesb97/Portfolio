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
  Projects = 'Projects';
  About = 'About';
  Contact = 'Contact';
  title = 'Portfolio';
  ToHome() {
    window.scrollTo(0, 0);
  }
}
