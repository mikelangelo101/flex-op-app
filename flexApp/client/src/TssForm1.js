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
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyle";





class TssForm1 extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           siteName: "",
           siteId: this.props.siteId,
           dateTime: null,
           location: "",
           longitude: "",
           latitute: "",
           siteSecurityName:"",
           siteSecurityContact:"",
           siteFSEName:"",
           siteFSEContact:"",
           siteAreaLocation: "",
           siteType:"",
           antennaSupport:"",
           equipmentHousing:"",
           availablePowerSource:"",
           foundLocation: false
       }
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
   } 

   componentDidMount(){
          let today = new Date();
          let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          let dateTime = date+' '+time;
          this.setState({
            dateTime: dateTime
          })
         navigator.geolocation.getCurrentPosition(
            (position) => {
             console.log(position);
             this.setState({
                longitude: (position.coords.longitude).toFixed(4),
                latitute: (position.coords.latitude).toFixed(4),
                foundLocation: true,
             })
          },
            function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
       );
       if (this.props.prevFormPage === 2) {
           this.setState({...this.props.currentState})
       }
   }

   handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitForm1({ ...this.state });
    this.props.changeFormPage(1);
    console.log("This is from form 1 submit")
   
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
            <Typography variant='h5'>Site Identification Details</Typography>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteName'>Site Name</InputLabel>
              <Input id='siteName' 
                     name='siteName' 
                     value={this.state.siteName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteId'>Site ID</InputLabel>
              <Input id='siteId' 
                     name='siteId'
                     disabled= {true}
                     value={this.state.siteId}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='dateTime'>Date and Time</InputLabel>
              <Input id='dateTime' 
                     name='dateTime' 
                     value={this.state.dateTime}
                     disabled ={true}
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
              <InputLabel htmlFor='longitude'>Longitude</InputLabel>
              <Input id='longitude' 
                     name='longitude'
                     value={this.state.longitude}
                     onChange={this.handleChange} 
                     disabled = {this.state.foundLocation ? true : false} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='latitute'>Latitute</InputLabel>
              <Input id='latitute' 
                     name='latitute' 
                     value={this.state.latitute}
                     onChange={this.handleChange} 
                     disabled = {this.state.foundLocation ? true : false} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteSecurityName'>Site Security Name</InputLabel>
              <Input id='siteSecurityName' 
                     name='siteSecurityName' 
                     value={this.state.siteSecurityName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteSecurityContact'>Site Security Contact</InputLabel>
              <Input id='siteSecurityContact' 
                     name='siteSecurityContact' 
                     value={this.state.siteSecurityContact}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteFSEName'>Site FSE Name</InputLabel>
              <Input id='siteFSEName' 
                     name='siteFSEName' 
                     value={this.state.siteFSEName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='siteFSEContact'>Site FSE Contact</InputLabel>
              <Input id='siteFSEContact' 
                     name='siteFSEContact' 
                     value={this.state.siteFSEContact}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <Typography variant='h5'>General Site Details</Typography>
            <InputLabel htmlFor='siteAreaLocation' style={{margin:"10px"}}>Site Area/Location</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'siteAreaLocation',
                        id: 'siteAreaLocation'
                       }}
                    value={this.state.siteAreaLocation}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />  
                 <option value='Education Institute'>Education Institute</option>
                 <option value='Mountain Area'>mountain Area</option>
                 <option value='Govt Estate'>Gov't Estate</option>
                 <option value='Private Esatate'>Private Estate</option>
                 <option value='Health Institute'>Health Institute</option>
                 <option value='Commercial Building'>Commercial Building</option>
                 <option value='Industrial Building'>Industrial Building</option>
                 <option value='Residential Building'>Residential Building</option>
                 <option value='Road Side'>Road Side</option>
                 <option value='Agricultural Area'>Agricultural Area</option>
                 <option value='Other'>Other</option>
            </Select>
            <InputLabel htmlFor='siteType' style={{margin:"10px"}}>Site Type</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'siteType',
                        id: 'siteType'
                            }}   
                    value={this.state.siteType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='New GreenField'>New GreenField</option>
                 <option value='New RoofTop'>New Rooftop</option>
                 <option value='Ex. GreenFiled'>Ex. GreenFiled</option>
                 <option value='Ex. RoofTop'>Ex. RoofTop</option>
            </Select>
            <InputLabel htmlFor='antennaSupport' style={{margin:"10px"}}>Antenna Support</InputLabel>
            <Select native 
                    required 
                    fullWidth
                    inputProps={{
                        name: 'antennaSupport',
                        id: 'antennaSupport'
                    }}  
                    value={this.state.antennaSupport}
                    onChange={this.handleChange}>          
                 <option aria-label="None" value="" /> 
                 <option value='Tower'>Tower</option>
                 <option value='Poles'>Poles</option>
            </Select>
            <InputLabel htmlFor='equipmentHousing' style={{margin:"10px"}}>Equipment Housing</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'equipmentHousing',
                        id: 'equipmentHousing'
                    }}   
                    value={this.state.equipmentHousing}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />
                 <option value='Shelter'>Shelter</option>
                 <option value='Outdoor'>Outdoor</option>
                 <option value='Building'>Building Room</option>
            </Select>
            <InputLabel htmlFor='availablePowerSource' style={{margin:"10px"}}>Available Power Source(s)</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'availablePowerSource',
                        id: 'availablePowerSource'
                            }} 
                    value={this.state.availablePowerSource}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />
                 <option value='Grid, Genset and Solar'>Grid, Genset and Solar</option>
                 <option value='Grid Only'>Grid Only</option>
                 <option value='Genset Only'>Genset Only</option>
                 <option value='Solar Only'>Solar Only</option>
                 <option value='Genset and Solar Only'>Genset and Solar Only</option>
                 <option value='Grid and Solar Only'>Grid and Solar Only</option>
            </Select>
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
             >
              Submit/Next
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(TssForm1);