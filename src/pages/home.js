import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Image from 'material-ui-image';


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
  }
}));

export default function Home() {
  document.title = "Home";
  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper} component='p'>My Name is Forrest Miller. I am a Graduate of Texas State University with Major in Digital Media. Born and raised in Austin Texas I have just moved here to the Nashville area to persue a career in development. I am currently attending the Vanderbilt Full-stack coding bootcamp where I will be learning JavaScript, React, MySQL and more. I was first introduced to the coding world when I took a intro to coding course for my college degree. From there my interest snowballed into me doing freelance Wordpress development. My most recent freelance job was for a small tech start up called WIN Reality in Austin, Texas. During my time at WIN Reality I was able to do small projects working with the Senior fullstack developer on the team. While working on these projects I was began to understand what a Web Developer truely does. Once I had tasted the thrill of making a project come to life I was hooked. Although I loved what I was doing I decided to leave WIN Reality and attend Vanderbilt coding bootcamp to expand my knowledge and skills within software development.</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Image src={process.env.PUBLIC_URL + '/images/Portrait.jpg'}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )

}