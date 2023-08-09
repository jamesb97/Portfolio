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

  Card1image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/0.jpg?alt=media&token=5ebe5cd1-cb09-4b43-8ca5-dd2c366119a1';
  Card1title = 'Autonomous Sentry Gun';
  Card1text =
    'Motion detection and object recognition sentry gun capable of detecting objects in real time using OpenCV, Python, C++, and Raspberry Pi.';
  Card1link = 'https://github.com/jamesb97/AutonomousSentryGun';

  Card2image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/1.jpg?alt=media&token=e0591058-c8f7-42dd-b712-58ae95534df3';
  Card2title = 'Intelligent Checkout System';
  Card2text =
    'Smart checkout system geared towards a faster & seamless checkout experience at local convenient stores by utilizing the latest machine learning libraries.';
  Card2link = 'https://bit.ly/ChecSys';

  Card3image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/9.png?alt=media&token=a0db29d2-5911-4b01-8a00-7ee4a48036ac';
  Card3title = 'Spring Car';
  Card3text =
    'Full-stack sortable car list application in which users can sort cars from a dropdown menu that displays 20 of the hottest cars in the market.';
  Card3link = 'https://github.com/jamesb97/SpringBootApplication';

  Card4image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/2.png?alt=media&token=c35c1f9f-46d1-426e-b2e1-7d81c512cb72';
  Card4title = 'React Spotify';
  Card4text =
    'Remastered version of Spotify for the web created using React, React Redux, React Hooks, and Spotify API';
  Card4link = 'https://updateprofile-valtqe.web.app/';

  Card5image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/3.jpg?alt=media&token=87838582-da2f-41a8-99cd-f3a869263082';
  Card5title = 'Telegram Todo Bot';
  Card5text =
    'A simple telegram todo bot using the python-telegram-bot library and BotFather.';
  Card5link = 'https://github.com/jamesb97/TelegramBot';

  Card6image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/4.png?alt=media&token=461a41a9-76c9-4df7-b501-65326c003adb';
  Card6title = 'React News';
  Card6text =
    'AI powered news site, all controllable with just a voice. To get started, try saying: Give me the latest news.';
  Card6link = 'https://kind-brahmagupta-6cbefe.netlify.app/';

  Card7image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/5.png?alt=media&token=93411691-b535-44f2-bd7a-2e5ada0f4e52';
  Card7title = 'React Netflix';
  Card7text =
    'A redesigned version of Netflix created with Firebase and React.';
  Card7link = 'https://netflix-clone-3b31f.firebaseapp.com/';

  Card8image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/6.png?alt=media&token=9bb02ad3-cc48-4e84-87d8-effe84986d2d';
  Card8title = 'Recipe Book';
  Card8text =
    'Online recipe tool, curated with dozens of useful recipes for anyone looking to make their next meal. Created with React.';
  Card8link = 'https://infallible-hamilton-a8e2a2.netlify.app/';

  Card9image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/7.png?alt=media&token=9d2be112-d0c0-4548-84ff-17e4ae6bc54b';
  Card9title = 'Shortest Path Algorithm';
  Card9text =
    "Desktop pathfinding visualizer that takes the first node & determines the shortest path needed to take in order to get to the second node by using Dijkstra's Algorithm.";
  Card9link = 'https://determined-lamarr-304345.netlify.app/';

  Card10image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/8.png?alt=media&token=8eda1abb-d1cb-4c25-ac62-22175863d024';
  Card10title = 'News Scrape';
  Card10text =
    'An intuitive Node.JS application that gathers news from YCombinator and writes them to Google Sheets with Pupeteer(Headless Chrome Browser).';
  Card10link = 'https://github.com/jamesb97/NewsScrape';

  Card11image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/10.png?alt=media&token=64af005d-d79b-4971-96fa-09c708f2526e';
  Card11title = 'Android Scanner';
  Card11text =
    'React Native Document & PDF Scanner with React, Android Studio, OpenCV, and the react-native-document-scanner API.';
  Card11link = 'https://github.com/jamesb97/PDFScanner';

  Card12image =
    'https://firebasestorage.googleapis.com/v0/b/angularportfolio-71eaa.appspot.com/o/11.png?alt=media&token=17706aa0-9bf1-4ee9-b838-1279265bff89';
  Card12title = 'Beach Resort';
  Card12text =
    'Online Room Reservations for popular tourist attractions with mutliple room selections and view options. Created with React.';
  Card12link = 'https://reactbeachresort17.netlify.app/';
}
