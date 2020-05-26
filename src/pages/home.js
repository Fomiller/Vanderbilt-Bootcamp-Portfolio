import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  },
  wrapper: {
    height: '75vh'
  },
  hover: {
    '&:hover': {
      color:theme.palette.secondary.dark,
    }
  }
}));

export default function Home() {
  document.title = "Forrest Miller | Home";
  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <Grid container direction='column' justify='center' alignItems='center' className={classes.wrapper}>
        <Grid item>
          <Typography variant="h1" textAlign='center' color="secondary">
            Forrest Miller
          </Typography>
        </Grid>
        <Grid item>
          <Button href='https://github.com/Fomiller' target="_blank" align='center'>
              <GitHubIcon color='secondary' fontSize='large' className={classes.hover}/>
          </Button>
          <Button href='https://www.linkedin.com/in/forrest-miller-dev/' target="_blank" align='center'>
            <LinkedInIcon color='secondary' fontSize='large' className={classes.hover}/>
          </Button>
          <Button href='mailto:forrestmillerj@gmail.com' target="_blank" align='center'>
            <EmailIcon color='secondary' fontSize='large' className={classes.hover}/>
          </Button>
        </Grid>
      </Grid>
    </Container>
  )

}