import React from 'react';
import Container from "@material-ui/core/Container";
import PortfolioGrid from '../components/PortfolioGrid';
import PortfolioNew from '../components/portfolio';

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
  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <PortfolioGrid/>
    </Container>
  )
}