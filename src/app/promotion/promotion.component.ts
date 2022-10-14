import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Achievements';
  opensource = '20+';
  opensourcedesc = 'Open Source Projects';
  firstplace = '1st place';
  firstplacedesc = 'Fall 2020 C-Day Winner';
  secondplace = '2nd place';
  secondplacedesc = '2018 CCSE Hackathon Winner';
  certificates = '5+';
  certificatesdesc = 'Course Certificates';
}
