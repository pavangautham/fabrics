import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link, withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { registerNewUser } from './redux/actions/authActions';
//import Register from './Register';
//import Welcome from './welcome';

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
    height: '450px',
    background: 'rgba(255, 255, 255, 0.8)',
    //background: 'rgba(0, 0, 0, 0.5)',
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

function Register({ history, auth, registerNewUser }) {
  const [ user, setUser ] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  })
  const classes = useStyles();

  useEffect(() => {
    const { isAuthenticated } = auth;
    if(isAuthenticated) {
      history.push('/wash')
    } else {
      var url = new URL(window.location.href);
      var newNumber = url.searchParams.get("newUser");
      if(newNumber) {
        setUser({...user, phone: newNumber});
      }
    }
  }, [])

  const locations = [
    { title: 'Bangalore'},
    { title: 'Mysore' },
    { title: 'Chennai' },
    { title: 'Hyderabad' },
    { title: 'Mumbai' },
  ];

  const onSubmit = e => {
    e.preventDefault();
    registerNewUser(user, history)
  }

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
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit} autoComplete="off">
            <Grid container spacing={2}>            
              <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  onChange={e => setUser({...user, name: e.target.value})}
                  value={user.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Mobile Number"
                  name="phone"
                  onChange={e => setUser({...user, phone: e.target.value})}
                  value={user.phone}
                  // autoComplete="pnum"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={e => setUser({...user, email: e.target.value})}
                  value={user.email}
                  // autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id="combo-box-demo"
                  options={locations}
                  getOptionLabel={(option) => option.title}
                  //style={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Location" variant="outlined" />}
                />
              </Grid>                        
            </Grid>
            {/* <Link to="/wash" style={{ textDecoration: 'none' }}> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            {/* </Link> */}
          
        </form>
      </div>
      </div>
      </CardContent>
      </Card>
      
    </Container>
    // </div>
  );
}

Register.propTypes = {
  registerNewUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { registerNewUser }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))