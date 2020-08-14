import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import CreateIcon from '@material-ui/icons/Create';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import DateNow from "./DatePicker";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyle";




class ProjectForm extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           projectName: "",
           projectCode:"",
           projectClient: "",
           projectDescription: "",
           projectScope: "",
           numberOfSites: "",
           projectLocation: "",
           projectManager: "",
           startDate: "",
           estimatedEndDate:""           
       }
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.handleChangeName = this.handleChangeName.bind(this)
       this.getStartDate = this.getStartDate.bind(this)
       this.getEndDate = this.getEndDate.bind(this)
       this.getProjectCode = this.getProjectCode.bind(this)
   } 

   componentDidMount(){
   }

   handleChangeName(evt){
    this.setState({
        [evt.target.name]: evt.target.value
      }, () => {
             this.getProjectCode();
      });

   }

   handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  getProjectCode(){
      let dDate = new Date();
      let projectCode = `${this.state.projectName.toUpperCase().replace(/\s+/g, '')}${dDate.getMonth()+1}${dDate.getFullYear()}`
      this.setState({
          projectCode: projectCode
      })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitProjectForm({ ...this.state });
    console.log("This is from Projectform submit")
    this.props.currentPage(0)
   
  }

  getStartDate(date){
    this.setState({
        startDate: date
      });
      
  }
  getEndDate(date){
    this.setState({
        estimatedEndDate: date
      });

  }
    
  render() {

    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateIcon />
          </Avatar>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectName'>Project Name</InputLabel>
              <Input id='projectName' 
                     name='projectName' 
                     value={this.state.projectName}
                     onChange={this.handleChangeName} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectCode'>Project Code</InputLabel>
              <Input id='projectCode' 
                     name='projectCode' 
                     disabled
                     value={this.state.projectCode}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectClient'>Project Client</InputLabel>
              <Input id='projectClient' 
                     name='projectClient'
                     value={this.state.projectClient}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectDescription'>Project Description</InputLabel>
              <Input id='projectDescription' 
                     name='projectDescription' 
                     value={this.state.projectDescription}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectScope'>Project Scope</InputLabel>
              <Input id='projectScope' 
                     name='projectScope'
                     value={this.state.projectScope}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='numberOfSites'>Number Of Sites</InputLabel>
              <Input id='numberOfSites' 
                     name='numberOfSites'
                     value={this.state.numberOfSites}
                     onChange={this.handleChange}
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectLocation'>Project Location</InputLabel>
              <Input id='projectLocation' 
                     name='projectLocation' 
                     value={this.state.projectLocation}
                     onChange={this.handleChange} 
                     disabled = {this.state.foundLocation ? true : false} 
                     autoFocus />
            </FormControl>
            <InputLabel htmlFor='projectManager' style={{margin:"10px"}}>Project Manager</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'projectManager',
                        id: 'projectManager'
                       }}
                    value={this.state.projectManager}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 <option value='Lanre'>Lanre</option>
                 <option value='Raji'>Raji</option>
                 <option value='Tony'>Tony</option>
                 <option value='Goke'>Goke</option>
                 <option value='Ebuka'>Ebuka</option>
                 <option value='Sunkanmi'>Sunkanmi</option>
            </Select>
            <FormControl margin='normal' required fullWidth>
               <DateNow placeholderText="Choose Start Date" getStartDate={this.getStartDate}/>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
               <DateNow placeholderText="Choose Extimated End Date" getEndDate={this.getEndDate}/>
            </FormControl>
 
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
             >
              Submit
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(ProjectForm);