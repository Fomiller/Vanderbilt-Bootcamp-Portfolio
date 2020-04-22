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
    repos:[]
  });
  return <Provider value={[state, dispatch]} {...props}/>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext};