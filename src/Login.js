import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Welcome from './welcome';

const useStyles = makeStyles((theme) => ({
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    background: 'url(images/banner.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    //backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh'    
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    background: 'transparent'
  },
  rootContent: {
    width: '400px',
    height: '400px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px'
  },
  paper: {    
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(2),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#e21f27',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    borderColor: '#055da0',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#055da0',
  },
}));

export default function Register() {
  const classes = useStyles();

  return (
    // <div className={classes.image}>
    <Container className={classes.image}>
      <CssBaseline />
      
      <Card className={classes.root}>
      <CardContent>
      <div className={classes.rootContent}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>            
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="number"
                    label="Mobile Number"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                />
                </Grid>                        
            </Grid>
          <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In / Sign Up
          </Button>
          </Link>
          
        </form>
      </div>
      </div>
      </CardContent>
      </Card>
      
    </Container>
    // </div>
  );
}