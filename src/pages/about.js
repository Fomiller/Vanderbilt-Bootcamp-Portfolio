import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from 'material-ui-image';
import { Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    marginTop: 50,
    marginBottom: 100,
  },
  portrait: {
    maxHeight: "400px",
    maxWidth: "400px",
  },
  header: {
    marginBottom: '50px',
  }
}));

export default function About() {
  document.title = "Forrest Miller | About";
  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <Grid container alignItems="flex-end" spacing={3} >
        <Grid item xs={12} md={6}>
          <Typography variant='h3' align='left' color='secondary' className={classes.header}>
            About me
          </Typography>
          <Paper className={classes.paper} spacing={3}>
            <Typography variant='body1' align='left'>
              Born and raised in Austin Texas, and graduate of Texas State University with a Major in Digital Media, I have recently moved to the Nashville area to persue a career in web development. I have recently recieved my certificate of completion from Vanderbilt University's Fullstack Coding Bootcamp, where I developed applications utilizing a variety of languages such as Node.js, React.js, Vanilla JavaScript, MySQL, and MongoDb.
            </Typography>
            <br/>
            <Typography variant='body1' align='left'>
              I was first introduced to the coding world when I took an intro to coding course during college. From there my interest snowballed into me doing freelance Wordpress development. My most recent job was working for a small tech start up called WIN Reality in Austin, Texas, where I rebranded the company's website and assisted in the development of WIN Reality's product dashboard. During this time I gained knowledge of GoLang and JavaScript.  
            </Typography>
            <br/>
            <Typography variant='h5' align='left'>
              Languages:
            </Typography>
            <Typography variant='body1' align='left'>
              Node.js, React.js, JavaScript, MongoDb, MySQL.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={ classes.paper}>
            <Image color={'#000'} src={process.env.PUBLIC_URL + '/images/Portrait.jpg'}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )

}