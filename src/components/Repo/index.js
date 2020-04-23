import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 120,
  },
});

export default function Repo(props) {
  const classes = useStyles();

  return (

      <Card className={classes.root}>
        {/* <CardActionArea href={props.html_url}>
          <CardMedia
          // image section
            className={classes.media}
            image='/images/GitHub_Logo.png'
            title="{props.name}"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2" align='center'>
              {props.name}
            </Typography>
          </CardContent>
        {/* </CardActionArea> */}
        <CardActions>
          <Button size="small" color="secondary" variant="contained" fullWidth  href={props.html_url}>
            Learn More
          </Button>
        </CardActions>
      </Card>


  );
}