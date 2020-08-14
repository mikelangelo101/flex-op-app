import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import uuid from "uuid/v4";
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





class GensetForm extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           gensetBrand: "",
           controllerModuleModel: "",
           totalRunhour: "",
           gensetPowerCapacity: "",
           outputType: "",
           controllerStatus: "",
           engineStatus:"",
           remoteStartSignalType: "",
           alarmsOutputType: ""
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
    this.props.addGensetDetails({ ...this.state, id: uuid() });
    console.log("Submiting Genset Form")
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
            <Typography variant='h5'>Genset Details</Typography>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='gensetBrand'>Genset Brand</InputLabel>
              <Input id='gensetBrand' 
                     name='gensetBrand' 
                     value={this.state.gensetBrand}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='controllerModuleModel'>Controller Module Model</InputLabel>
              <Input id='controllerModuleModel' 
                     name='controllerModuleModel'
                     value={this.state.controllerModuleModel}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='totalRunhour'>Total Runhou(h)</InputLabel>
              <Input id='totalRunhour' 
                     name='totalRunhour' 
                     value={this.state.totalRunhour}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='gensetPowerCapacity'>Genset Power Capacity (KVA)</InputLabel>
              <Input id='gensetPowerCapacity' 
                     name='gensetPowerCapacity'
                     value={this.state.gensetPowerCapacity}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <InputLabel htmlFor='outputType' style={{margin:"10px"}} >Select Output Type</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'outputType',
                        id: 'outputType'
                      }}
                    value={this.state.outputType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='AC'>Alternating Current AC</option>
                 <option value='DC'>Direct Current DC</option>
            </Select>
            <InputLabel htmlFor='controllerStatus' style={{margin:"10px"}} >Genset Controller Module Status</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'controllerStatus',
                        id: 'controllerStatus'
                      }}
                    value={this.state.controllerStatus}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='Good'>Good</option>
                 <option value='Bad'>Bad</option>
            </Select>
            <InputLabel htmlFor='engineStatus' style={{margin:"10px"}} >Genset Engine Status</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'engineStatus',
                        id: 'engineStatus'
                      }}
                    value={this.state.engineStatus}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='Good'>Good</option>
                 <option value='Bad'>Bad</option>
            </Select>
            <InputLabel htmlFor='remoteStartSignalType' style={{margin:"10px"}} > Remote Start Signal Type</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'remoteStartSignalType',
                        id: 'remoteStartSignalType'
                      }}
                    value={this.state.remoteStartSignalType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='Dry Contact Switch'>Dry Contact Switch</option>
                 <option value='RS485 RTU Signal'>RS485 RTU Signal</option>
                 <option value='RS485 Ethernet Signal'>RS485 Ethernet Signal</option>
                 <option value='CAN Signal'>CAN Signal</option>
                 <option value='Analog Voltage Signal'>Analog Voltage Signal</option>
                 <option value='Analog Current Signal'>Analog Current Signal</option>
                 <option value='Not Available'>Not Available</option>
            </Select>
            <InputLabel htmlFor='alarmsOutputType' style={{margin:"10px"}} >Alarms Output Type</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'alarmsOutputType',
                        id: 'alarmsOutputType'
                      }}
                    value={this.state.alarmsOutputType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='Digital Output Signals'>Digital Output Signals</option>
                 <option value='Via RS485 RTU'>Via RS485 RTU</option>
                 <option value='Via RS485 Ethernet'>Via RS485 Ethernet</option>
                 <option value='Via CAN'>Via CAN</option>
                 <option value='Not Available'>Not Available</option>
            </Select>   
              
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
          <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
              onClick={() => {
                this.props.cancelForm();
              }}
             >
              Cancel
            </Button>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(GensetForm);