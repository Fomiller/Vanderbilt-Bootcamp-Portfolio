import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
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
}));

export default function NavBar(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <React.Fragment>
      <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar>
            <Container>
              <Toolbar>
                <Typography className={classes.root}>
                  <Link component={RouterLink} to="/" color="secondary">
                    Home
                  </Link>
                  <Link component={RouterLink} to="/contact" color="secondary">
                    Contact
                  </Link>
                  <Link component={RouterLink} to="/portfolio" color="secondary">
                    Portfolio
                  </Link>
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
