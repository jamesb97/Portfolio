import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Skills';
  java = 'Java, Spring Boot, Maven, Gradle, Android';
  javaimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/java-logo.png?alt=media&token=fd0dc3c3-cf99-46c5-89f2-22d9e2f8126c';
  python = 'Python, Jupyter Notebook, Anaconda, Matplotlib';
  pythonimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/5968544.png?alt=media&token=2a3d917b-ee07-43e5-b827-e39a3e4ff865';
  javascript = 'HTML, CSS, JavaScript, Angular, React, Node.JS';
  javascriptimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/721791.png?alt=media&token=98d7efbb-d334-4ca8-8a60-d03556043e52';
  googlecloud = 'Google Cloud, AWS, Docker, Kubernetes, Linux';
  googlecloudimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/873168.png?alt=media&token=e18e66ce-423e-4640-8a0c-46f5865229bb';
  sketch = 'Sketch, Adobe, Figma, Blender';
  sketchimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/732113.png?alt=media&token=75f29506-5791-47b4-9c85-2550dcedc23f';
  sql = 'SQL, MySQL, Microsoft SQL Server, NoSQL';
  sqlimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/658099.png?alt=media&token=05466da4-632e-4416-b6dc-7f9c974f3b02';
  api = 'REST API, Postman, GitHub, Version Control';
  apiimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/6577247.png?alt=media&token=0953dfaf-5271-40f3-b8d0-efedc90b8fe2';
  csharp = 'C#, ASP.NET, C/C++, Visual Studio';
  csharpimg =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/letter-c.png?alt=media&token=feca1a91-45ac-43e4-ab05-370054c9bdf6';
}
