import React from 'react';
import Container from "@material-ui/core/Container";
import PortfolioGrid from '../components/PortfolioGrid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 50,
    marginBottom: 100,
  },
}));


export default function Portfolio() {
  document.title = "Forrest Miller | Portfolio";
  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <PortfolioGrid/>
    </Container>
  )
}