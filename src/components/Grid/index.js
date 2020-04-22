import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function GridItem() {
  const classes = useStyles();
  return (
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
  );
}
