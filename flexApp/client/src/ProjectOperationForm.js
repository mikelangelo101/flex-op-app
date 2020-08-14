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
import {GetPassCode} from "./GetPassCode";




class ProjectOperationForm extends Component {
  
   constructor(props){
       super(props);

       this.state= {
        projectName:"",
        projectCode:"",
        operationType: "",
        siteId:"",
        location: "",
        country: "",
        FSEName: "",
        FSEContact: "",
        assingedStaffPosition:"",
        assingedStaff: "",
        assingedStaffContact: "",
        assingedStaffName: "",
        operationDate: "",
        operationCode:""           
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChangeName = this.handleChangeName.bind(this);
       this.handleChangeUser = this.handleChangeUser.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.getOperationDate = this.getOperationDate.bind(this);
       this.getProjectCode = this.getProjectCode.bind(this);
       this.getUserDetails = this.getUserDetails.bind(this);
   } 

   componentDidMount(){
   }


   handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleChangeName(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    }, ()=> {
      this.getProjectCode();
    });
  }
  handleChangeUser(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    }, ()=> {
      this.getUserDetails();
    });
  }

  getProjectCode(){
      this.props.projects.map(project => {
         if (project.projectName === this.state.projectName){
          this.setState({
            projectCode: project.projectCode
        });   
       };
      });
  }

  getUserDetails(){
    if (this.state.assingedStaffPosition === "Staff"){
      this.props.users.map(user => {
        if (user.username === this.state.assingedStaff){
          this.setState({
            assingedStaffContact: user.phoneContact,
            assingedStaffName: `${user.firstName} ${user.lastName}`
        });  
        }
      })
    } else {
      this.props.usersAdoc.map(userAdoc => {
        if (userAdoc.username === this.state.assingedStaff){
          this.setState({
            assingedStaffContact: userAdoc.phoneContact,
            assingedStaffName: `${userAdoc.firstName} ${userAdoc.lastName}`
        });  
        }
      })
    }

  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitOperationForm({ ...this.state });
    console.log("This is from Project Operation form submit")
    this.props.currentPage(4)
  }

  getOperationDate(date){
    this.setState({
        operationDate: date,
        operationCode: GetPassCode()
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
          <InputLabel htmlFor='projectName' style={{margin:"10px"}}>Project Name</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'projectName',
                        id: 'projectName'
                       }}
                    value={this.state.projectName}
                    onChange={this.handleChangeName}>
                 <option aria-label="None" value="" />  
                 {this.props.projects.map((project) => (
                     <option value={project.projectName}>{project.projectName}</option>))}

            </Select>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='projectCode'>Project Code</InputLabel>
              <Input id='projectCode' 
                     name='projectCode' 
                     disabled
                     value={this.state.projectCode}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
          <InputLabel htmlFor='operationType' style={{margin:"10px"}}>Operation Type</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'operationType',
                        id: 'operationType'
                       }}
                    value={this.state.operationType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 <option value='TSS'>TSS</option>
                 <option value='Commissioning'>Commissioning</option>
                 <option value='Installation'>Installation</option>
                 <option value='Operational Fix'>Operational Fix</option>
            </Select>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteId'>Site ID</InputLabel>
              <Input id='siteId' 
                     name='siteId' 
                     value={this.state.siteId}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='location'>Location</InputLabel>
              <Input id='location' 
                     name='location' 
                     value={this.state.location}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='country'>Country</InputLabel>
              <Input id='country' 
                     name='country'
                     value={this.state.country}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='FSEName'>FSE Name</InputLabel>
              <Input id='FSEName' 
                     name='FSEName' 
                     value={this.state.FSEName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='FSEContact'>FSE Contact</InputLabel>
              <Input id='FSEContact' 
                     name='FSEContact'
                     value={this.state.FSEContact}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <InputLabel htmlFor='assingedStaffPosition' style={{margin:"10px"}}>Assinged Staff Position</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'assingedStaffPosition',
                        id: 'assingedStaffPosition'
                       }}
                    value={this.state.assingedStaffPosition}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 <option value='Staff'>Staff</option>
                 <option value='AdocStaff'>Adoc Staff</option>
            </Select>
            <InputLabel htmlFor='assingedStaff' style={{margin:"10px"}}>Assinged Staff ID</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'assingedStaff',
                        id: 'assingedStaff'
                       }}
                    value={this.state.assingedStaff}
                    onChange={this.handleChangeUser}>
                 <option aria-label="None" value="" />  
                 { this.state.assingedStaffPosition === "Staff" ?
                    (this.props.users.map(user => (
                      <option value={user.username}>{user.username}</option>)))
                      :(
                        this.props.usersAdoc.map(userAdoc => (
                          <option value={userAdoc.username}>{userAdoc.username}</option>))
                      )}
            </Select>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='assingedStaffContact'>Assinged Staff Contact</InputLabel>
              <Input id='assingedStaffContact' 
                     name='assingedStaffContact' 
                     disabled
                     value={this.state.assingedStaffContact}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='assingedStaffName'>Assinged Staff Name</InputLabel>
              <Input id='assingedStaffName' 
                     name='assingedStaffName' 
                     disabled
                     value={this.state.assingedStaffName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
               <DateNow placeholderText="Choose Operation Date" getOperationDate={this.getOperationDate}/>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='operationCode'>Operation Code</InputLabel>
              <Input id='operationCode' 
                     name='operationCode'
                     disabled
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
              Submit
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(ProjectOperationForm);