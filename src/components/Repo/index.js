import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
  chip: {
    margin:".25em"
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
}
});

export default function Repo(props) {
  const classes = useStyles();
  return (
      <Card className={classes.root, classes.card}>
          <CardMedia
            // image section
            className={classes.media}
            // src
            image={props.image}
            title="{props.name}"
          />
          <CardContent style={{minHeight:'205px'}}>
            <Typography gutterBottom variant="h5" align='center'>
              {props.name}
            </Typography>
            <Typography gutterBottom variant="body2" align='left'>
              {props.description}
            </Typography>
            {/* create languages */}
            {props.languages.map(language => {
              return (
                <Chip variant="outlined" color="secondary" size="small" label={language} className={classes.chip}/>
              );
            })}
          </CardContent>
        <CardActions>
          <Button size="small" color="secondary" variant="contained" fullWidth  href={props.github}>
            GitHub
          </Button>
          <Button size="small" color="secondary" variant="contained" fullWidth  href={props.deployed}>
            Deployed App
          </Button>
        </CardActions>
      </Card>


  );
}