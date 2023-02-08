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
  javaimg = '../../assets/images/java-logo.png';
  python = 'Python, Jupyter Notebook, Anaconda, Matplotlib';
  pythonimg = '../../assets/images/5968544.png';
  javascript = 'HTML, CSS, JavaScript, Angular, React, Node.JS';
  javascriptimg = '../../assets/images/721791.png';
  googlecloud = 'Google Cloud, AWS, Docker, Kubernetes, Linux';
  googlecloudimg = '../../assets/images/873168.png';
  sketch = 'Sketch, Adobe, Figma, Blender';
  sketchimg = '../../assets/images/732113.png';
  sql = 'SQL, MySQL, Microsoft SQL Server, NoSQL';
  sqlimg = '../../assets/images/658099.png';
  api = 'REST API, Postman, GitHub, Version Control';
  apiimg = '../../assets/images/6577247.png';
  csharp = 'C#, ASP.NET, C/C++, Visual Studio';
  csharpimg = '../../assets/images/353972.png';
}
