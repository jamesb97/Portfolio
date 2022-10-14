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
  python = 'Python, Jupyter Notebook, Anaconda, Matplotlib';
  javascript = 'HTML, CSS, JavaScript, Angular, React, Node.JS';
  googlecloud = 'Google Cloud, AWS, Docker, Kubernetes, Linux';
  sketch = 'Sketch, Adobe, Figma, Blender';
  sql = 'SQL, MySQL, Microsoft SQL Server, NoSQL';
  api = 'REST API, Postman, GitHub, Version Control';
  csharp = 'C#, ASP.NET, C/C++, Visual Studio';
}
