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
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/SigninStyle";
import Main from "./Main";
import Esitelogo from "./images/esite-logo.svg";





class UserForm extends Component {
  
   constructor(props){
       super(props);
       
       this.state = {
        firstName:"",
        lastName:"",
        phoneContact:"",
        username: "",
        password: "",
        registrer:"",
        position:""
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
    this.props.submitUserForm({ ...this.state });
    console.log("This is from User Form submit")
     
  }

    
  render() {

    const { classes } = this.props;
    return (
      <>
      <Main />
      <main className={classes.main} style={{marginTop:"75px"}}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          <img src={Esitelogo} style={{ width: "65%", margin: "10px"}} alt="eSite Logo" />
          </Avatar>
          <Typography variant='h5'>Register A User</Typography>
 
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel className={classes.muiFocused} htmlFor='firstName'>First Name</InputLabel>
              <Input id='firstName'
                     name='firstName'
                     value={this.state.firstName} 
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel className={classes.muiFocused} htmlFor='lastName'>Last Name</InputLabel>
              <Input id='lastName'
                     name='lastName'
                     value={this.state.lastName} 
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel className={classes.muiFocused} htmlFor='username'>Email</InputLabel>
              <Input id='username'
                     name='username'
                     value={this.state.username} 
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel className={classes.muiFocused} htmlFor='phoneContact'>Phone Contact</InputLabel>
              <Input id='phoneContact'
                     name='phoneContact'
                     value={this.state.phoneContact} 
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input id='password'
                     name='password' 
                     value={this.state.password}
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <InputLabel htmlFor='registrer' style={{margin:"10px"}}>Registrer</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'registrer',
                        id: 'registrer'
                       }}
                    value={this.state.registrer}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 {this.props.users.map((user) => (
                     <option value={user.username}>{user.username}</option>))}
            </Select>
            <InputLabel htmlFor='position' style={{margin:"10px"}}>Position</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'position',
                        id: 'position'
                       }}
                    value={this.state.position}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 <option value='manager'>Manager</option>
                 <option value='staff'>Staff</option>
                 <option value='adhocStaff'>Adhoc Staff</option>
                 <option value='countryManager'>Country Manager</option>
            </Select>
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
             >
              Add User
            </Button>
          </form>
        </Paper>
      </main>
      </>
    );
  }
}
export default withStyles(styles)(UserForm);