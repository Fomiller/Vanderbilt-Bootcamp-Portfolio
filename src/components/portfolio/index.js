import React from 'react';
import Card from '../card';


const portfolioItems = [
  {
    name:'Code Quiz',
    image:'https://storage.needpix.com/rsynced_images/quiz-2432440_1280.png',
    description:'',
    github:'https://github.com/Fomiller/Code-Quiz',
    deployed:'https://fomiller.github.io/Code-Quiz/',
    languages:['JavaScript','jQuery','HTML5','CSS3']
  },
  {
    name:'README Generator',
    image:'../../public/assets/readme.png',
    description:'',
    github:'https://github.com/Fomiller/README-Generator',
    deployed:'https://fomiller.github.io/README-Generator/',
    languages:['Node.js','JavaScript']
  },
  {
    name:'Eat da Burger',
    image:'../../public/assets/02_burger.jpg',
    description:'',
    github:'https://github.com/Fomiller/Eat-Da-Burger',
    deployed:'https://calm-plateau-39779.herokuapp.com/',
    languages:['Node.js','JavaScript','jQuery','HTML5','CSS3','MongoDb']
  },
  {
    name:'Music Event Locator',
    image:'https://storage.needpix.com/rsynced_images/music-2297759_1280.png',
    description:'',
    github:'https://github.com/Fomiller/Music-Event-Locator',
    deployed:'https://fomiller.github.io/Music-Event-Locator/',
    languages:['JavaScript','HTML5','CSS3']
  },
  {
    name:'Ultimate Cookbook',
    image:'../../public/assets/chefhat_v02.png',
    description:'',
    github:'https://github.com/Fomiller/Ultimate-Cookbook',
    deployed:'https://fierce-eyrie-83099.herokuapp.com/',
    languages:['Node.js','JavaScript','HTML5','CSS3','MySQL']
  },
  {
    name:'Fireside',
    image:'../../public/assets/fireside.png',
    description:'',
    github:'https://github.com/Fomiller/Fireside',
    deployed:'https://powerful-crag-10383.herokuapp.com/',
    languages:['Node.js','React.js','HTML5','CSS3','MongoDb']
  },
]

export default function PorfolioNew() {
  return(
    <div>
      This is my new portfolio.
      it will be a 2x2 grid on sm screens.
      and a 3x3 grid on md and above screens.
      Each item will be a card with button to the github repo and a link to the deployed application if applicable.
      Each portfolio item will have an image. Can be taken from static portfolio if necessary.
      Each portfolio item will have a description, reference project readme if needed.
      Each portfolio item will have a badge of the languages and apps used in the project.
      There will be a minimum of 6 projects included.
      <Card/>
    </div>
  )
};