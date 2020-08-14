import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DialogBoxInfo from "./dialogBoxInfo";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/SigninStyle";
import Esitelogo from "./images/esite-logo.svg";






class SignIn extends Component {
  
   constructor(props){
       super(props);
       
       this.state = {
        email: "",
        password: "",
        showDialog: false,
        dialogMessage: ""
       }
       
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
   } 

   handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("Current State: " + JSON.stringify(this.state))
    axios({
      method: 'post',
      url: "/api/login",
      crossdomain: true, 
      data: {...this.state }
    })
    .then((response) => {
    console.log(response.data);	
    if (response.data.login){
      console.log(response.data.foundUser);
      this.props.history.push("/main");	   
    }else {
      this.props.history.push("/main");
      this.setState({
        email: "",
        password: "",
        showDialog: true,
        dialogMessage: response.data.error
       }, () => {
         console.log(this.state);
         setTimeout(() => {
           this.setState({
             showDialog: false
           })
         }, 5000);
       });  
    }
    })
    .catch((error) => {
    console.log(">>>>>.....>>>>: " + error.message)
    this.setState({
      email: "",
      password: "",
      showDialog: true,
      dialogMessage: error.message
     }, () => {
       setTimeout(() => {
         this.setState({
           showDialog: false
         })
       }, 5000);
     });    
    });    
  }



    
  render() {

    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          <img src={Esitelogo} style={{ width: "65%", margin: "10px"}} alt="eSite Logo" />
          </Avatar>
          <Typography variant='h5'>Sign In- Flex OP</Typography>
 
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel className={classes.muiFocused} htmlFor='email'>Email</InputLabel>
              <Input id='email'
                     name='email'
                     value={this.state.email} 
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input id='password'
                     name='password' 
                     value={this.state.password}
                     type="password"
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label="Remember Me"
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
             >
              Sign In
            </Button>
          </form>
          {this.state.showDialog && <DialogBoxInfo message = {this.state.dialogMessage} 
                                                   state   = {this.state.showDialog} />

          }
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(SignIn);