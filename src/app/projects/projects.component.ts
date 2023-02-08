import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Title = 'Projects';
  Visit = 'VISIT';

  Card1image = '../../assets/images/0.jpg';
  Card1title = 'Autonomous Sentry Gun';
  Card1text =
    'Motion detection and object recognition sentry gun capable of detecting objects in real time using OpenCV, Python, C++, and Raspberry Pi.';
  Card1link = 'https://github.com/jamesb97/AutonomousSentryGun';

  Card2image = '../../assets/images/1.jpg';
  Card2title = 'Intelligent Checkout System';
  Card2text =
    'Smart checkout system geared towards a faster & seamless checkout experience at local convenient stores by utilizing the latest machine learning libraries.';
  Card2link = 'https://bit.ly/ChecSys';

  Card3image = '../../assets/images/9.png';
  Card3title = 'Spring Car';
  Card3text =
    'Full-stack sortable car list application in which users can sort cars from a dropdown menu that displays 20 of the hottest cars in the market.';
  Card3link = 'https://github.com/jamesb97/SpringBootApplication';

  Card4image = '../../assets/images/2.png';
  Card4title = 'React Spotify';
  Card4text =
    'Remastered version of Spotify for the web created using React, React Redux, React Hooks, and Spotify API';
  Card4link = 'https://updateprofile-valtqe.web.app/';

  Card5image = '../../assets/images/3.jpg';
  Card5title = 'Telegram Todo Bot';
  Card5text =
    'A simple telegram todo bot using the python-telegram-bot library and BotFather.';
  Card5link = 'https://github.com/jamesb97/TelegramBot';

  Card6image = '../../assets/images/4.png';
  Card6title = 'React News';
  Card6text =
    'AI powered news site, all controllable with just a voice. To get started, try saying: Give me the latest news.';
  Card6link = 'https://kind-brahmagupta-6cbefe.netlify.app/';

  Card7image = '../../assets/images/5.png';
  Card7title = 'React Netflix';
  Card7text =
    'A redesigned version of Netflix created with Firebase and React.';
  Card7link = 'https://netflix-clone-3b31f.firebaseapp.com/';

  Card8image = '../../assets/images/6.png';
  Card8title = 'Recipe Book';
  Card8text =
    'Online recipe tool, curated with dozens of useful recipes for anyone looking to make their next meal. Created with React.';
  Card8link = 'https://infallible-hamilton-a8e2a2.netlify.app/';

  Card9image = '../../assets/images/7.png';
  Card9title = 'Shortest Path Algorithm';
  Card9text =
    "Desktop pathfinding visualizer that takes the first node & determines the shortest path needed to take in order to get to the second node by using Dijkstra's Algorithm.";
  Card9link = 'https://determined-lamarr-304345.netlify.app/';

  Card10image = '../../assets/images/8.png';
  Card10title = 'News Scrape';
  Card10text =
    'An intuitive Node.JS application that gathers news from YCombinator and writes them to Google Sheets with Pupeteer(Headless Chrome Browser).';
  Card10link = 'https://github.com/jamesb97/NewsScrape';

  Card11image = '../../assets/images/10.png';
  Card11title = 'Android Scanner';
  Card11text =
    'React Native Document & PDF Scanner with React, Android Studio, OpenCV, and the react-native-document-scanner API.';
  Card11link = 'https://github.com/jamesb97/PDFScanner';

  Card12image = '../../assets/images/11.png';
  Card12title = 'Beach Resort';
  Card12text =
    'Online Room Reservations for popular tourist attractions with mutliple room selections and view options. Created with React.';
  Card12link = 'https://reactbeachresort17.netlify.app/';
}
