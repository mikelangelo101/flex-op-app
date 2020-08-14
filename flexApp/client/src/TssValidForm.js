import React, { Component } from "react";
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
import styles from "./styles/FormStyle";




class TssValidForm extends Component {
  
   constructor(props){
       super(props);

       this.state= {
        siteId: "",
        projectId: "",
        operationCode: ""
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
    this.props.submitValidForm({ ...this.state });
    this.props.changeFormPage(1); 
  }
    
  render() {

    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Validate Operation</Typography>
 
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteId'>Site ID</InputLabel>
              <Input id='siteId' 
                     name='siteId'
                     value={this.state.siteID}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectId'>Project ID</InputLabel>
              <Input id='projectId' 
                     name='projectId' 
                     value={this.state.projectId}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='operationCode'>Operation Code</InputLabel>
              <Input id='operationCode' 
                     name='operationCode' 
                     value={this.state.operationCode}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
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
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(TssValidForm);