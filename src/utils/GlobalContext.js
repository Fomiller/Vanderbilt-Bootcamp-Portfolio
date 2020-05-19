import React, {useContext, createContext, useReducer} from 'react';
import {UPDATE_REPOS} from './actions';

const AppContext = createContext()
const { Provider } = AppContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_REPOS:
      return{
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
};

const AppProvider = ({value = [], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    name:"Forrest Miller",
    repos:[
    {
      name:'Fireside',
      image:`${process.env.PUBLIC_URL}` + '/assets/fireside.png',
      description:'Fireside is a real time messaging application for when you and those around you need to have a fireside chat.',
      github:'https://github.com/Fomiller/Fireside',
      deployed:'https://powerful-crag-10383.herokuapp.com/',
      languages:['Node.js','React.js','MongoDb']
    },
    {
      name:'Ultimate Cookbook',
      image:`${process.env.PUBLIC_URL}` + '/assets/chefhat_v02.png',
      description:'Ultimate Cookbook is a recipe app that allows you to create, read, update and delete your own recipes, as well as comment and read other users recipes.',
      github:'https://github.com/Fomiller/Ultimate-Cookbook',
      deployed:'https://fierce-eyrie-83099.herokuapp.com/',
      languages:['Node.js','JavaScript','MySQL']
    },
    {
      name:'Music Event Locator',
      image:'https://storage.needpix.com/rsynced_images/music-2297759_1280.png',
      description:'Music Event Locator is designed to easily allow you to find live music events near you that fit your mood, genre, or travel preference.',
      github:'https://github.com/Fomiller/Music-Event-Locator',
      deployed:'https://fomiller.github.io/Music-Event-Locator/',
      languages:['JavaScript']
    },
    {
      name:'README Generator',
      image:`${process.env.PUBLIC_URL}` + '/assets/readme.png',
      description:'README Generator is a Node.js CLI for creating clear and well structured README files for your applications.',
      github:'https://github.com/Fomiller/README-Generator',
      deployed:'https://fomiller.github.io/README-Generator/',
      languages:['Node.js','JavaScript']
    },
    {
      name:'Eat da Burger',
      image:`${process.env.PUBLIC_URL}` + '/assets/02_burger.jpg',
      description:"Eat-Da-Burger is a application that allows you to order your favorite burger and devour it. Don't forget to throw it away when you are done!",
      github:'https://github.com/Fomiller/Eat-Da-Burger',
      deployed:'https://calm-plateau-39779.herokuapp.com/',
      languages:['Node.js','jQuery','MongoDb']
    },
    {
      name:'Code Quiz',
      image:'https://storage.needpix.com/rsynced_images/quiz-2432440_1280.png',
      description:'Test your coding knownledge in this fun JavaScript application. Once you have completed the quiz see if you can beat yout time.',
      github:'https://github.com/Fomiller/Code-Quiz',
      deployed:'https://fomiller.github.io/Code-Quiz/',
      languages:['JavaScript','jQuery']
    }
  ]
  });
  return <Provider value={[state, dispatch]} {...props}/>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };