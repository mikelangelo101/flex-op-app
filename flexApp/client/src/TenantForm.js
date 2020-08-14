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





class TenantForm extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           networkName: "",
           equipment: "",
           loadCurrent: "",
           loadVoltage: "",
           loadPowerWatt: 0,
           position: "",
           cabinetCooling: ""
       }

       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
   } 

//    componentDidMount(){
//        if (this.props.prevFormPage === 2) {
//            this.setState({...this.props.currentState})
//        }
//    }

   handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      loadPowerWatt: Number(this.state.loadCurrent) * Number(this.state.loadVoltage)
    }, () => {
      this.props.addTenantLoad({ ...this.state, id: uuid() });
    });
    console.log("This is from Tenant Form")
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
            <Typography variant='h5'>Tenant Equipment Details</Typography>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='networkName'>Network Name</InputLabel>
              <Input id='networkName' 
                     name='networkName' 
                     value={this.state.networkName}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='equipment'>Equipment Name</InputLabel>
              <Input id='equipment' 
                     name='equipment'
                     value={this.state.equipment}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='loadCurrent'>Load Current (A)</InputLabel>
              <Input id='loadCurrent' 
                     name='loadCurrent' 
                     value={this.state.loadCurrent}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='loadVoltage'>Load Voltage (V)</InputLabel>
              <Input id='loadVoltage' 
                     name='loadVoltage'
                     value={this.state.loadVoltage}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            {/* <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='loadPowerWatt'>Load Power (W)</InputLabel>
              <Input id='loadPowerWatt' 
                     name='loadPowerWatt'
                     value={this.state.loadPower}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl> */}
            <InputLabel htmlFor='position'>Position</InputLabel>
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
                  <option value='Indoor'>InDoor</option>
                  <option value='Outdoor'>OutDoor</option>
            </Select>
            <InputLabel htmlFor='cabinetCooling'>Cabinet Cooling</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                      name: 'cabinetCooling',
                      id: 'cabinetCooling'
                    }}
                    value={this.state.cabinetCooling}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
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
export default withStyles(styles)(TenantForm);