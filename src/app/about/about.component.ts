import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  aboutMe = 'About Me';
  aboutImg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/kusoCartoon_16621526178716_.jpeg?alt=media&token=6c18b92a-c8e5-4ff4-a84e-590fc5379119';
  aboutParaHeading = 'My name is Zdravko.';
  aboutParaOne =
    "I am a computer science graduate and software engineer at Macy's Inc. that utilizes React, Java, and Google Cloud Platform in creating interactive user experiences for the warehouse management system. I have experience in object-oriented programming, software development with various technologies and platforms, and interface design. I am adaptive to new and upcoming technologies, where I am able to learn and master. Outside of developing the latest applications, I enjoy traveling, cooking, playing basketball, and reading tech news. In the past, I got to work with Figma and React to develop various designs and logos. I am currently experiementing with Google Cloud by bringing the latest AI Technologies to the table.";
  aboutDesigns = 'https://angulardesigns-aaa7c.web.app/';
  myDesigns = 'My Designs';
}
