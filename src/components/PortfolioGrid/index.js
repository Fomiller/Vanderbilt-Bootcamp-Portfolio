import React, {useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useAppContext } from '../../utils/GlobalContext';
import API from '../../utils/API';
import {UPDATE_REPOS} from '../../utils/actions';
import Repo from '../Repo';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PortfolioGrid() {
  document.title = "Portfolio";
  const classes = useStyles();
  const [state, dispatch] = useAppContext()
  
  useEffect(() => {
    API.getRepos()
    // gets all repos from github profile
    .then(res => dispatch({type:UPDATE_REPOS, payload: res.data}))
    .catch(err => console.log(err))
  }, []);
  
  // create cards for repos using Repo component
  // map through state.repos and create a Repo component wrapped in a GridItem
  function createRepos(){
    return(
      state.repos.map(repo => {
        return(
          <Grid item xs={12} md={6} lg={4}>
            <Repo {...repo}/>
          </Grid>
        );
      })
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {createRepos()}
      </Grid>
    </div>
  );
}
