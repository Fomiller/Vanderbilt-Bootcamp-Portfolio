import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  appBar: {
    backgroundColor: theme.palette.common.black
  },
  navlink: {
    margin: theme.spacing(5),
    fontSize: '1.3em',
    '&:hover': {
      color:theme.palette.secondary.dark,
      textDecoration: 'none'
    }
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item>
                  {/* <Typography variant='h6' className={classes.root}> */}
                    <Link component={RouterLink} to={process.env.PUBLIC_URL + "/"} color="secondary" className={classes.navlink}>
                      Home
                    </Link>
                  {/* </Typography> */}
                </Grid>
                <Grid item>
                  {/* <Typography variant='h6' className={classes.root}> */}
                  <Link component={RouterLink} to={process.env.PUBLIC_URL + "/about"} color="secondary" className={classes.navlink}>
                    About
                  </Link>
                  {/* </Typography> */}
                </Grid>
                <Grid item>
                  {/* <Typography variant='h6' className={classes.root}> */}
                  <Link component={RouterLink} to={process.env.PUBLIC_URL + "/portfolio"} color="secondary" className={classes.navlink}>
                    Portfolio
                  </Link>
                  {/* </Typography> */}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
