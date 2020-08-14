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




class TssForm2 extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           lengthOfBatteryCable:"",
           lengthOfEarthCable:"",
           lengthOfGensetCable:"",
           lengthOfRemoteStartCable:"",
           lengthOfGenBatteryCable:"",
           lengthOfCANCable:"",
           totalLengthofLoadCable:"",
           lengthOFShelter_CabinetCoolingCable:"",
           existingRetifierAndDBDistance:"",
           x10StandRequired: "",
           existingPlinthSuitableForX10Stand:"",
           allTenantDBAvailable: "",
           earthingSystemSuitable: "",
           earthingPointAvailable:""
       }
       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.goPrevious = this.goPrevious.bind(this)
   } 

   componentDidMount(){
    if (this.props.prevFormPage === 3) {
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
    this.props.submitForm2({ ...this.state });
    this.props.changeFormPage(1);
  }
  goPrevious(){
    this.props.changeFormPage(-1);
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
            <Typography variant='h5'>X10 Installation Requirement</Typography>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfBatteryCable'>Length Of Battery Cable (m)</InputLabel>
              <Input id='lengthOfBatteryCable' 
                     name='lengthOfBatteryCable' 
                     value={this.state.lengthOfBatteryCable}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfEarthCable'>Length Of EarthCable (m)</InputLabel>
              <Input id='lengthOfEarthCable' 
                     name='lengthOfEarthCable'
                     value={this.state.lengthOfEarthCable}
                     onChange={this.handleChange}   
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfGensetCable'>Length Of Genset Cable (m)</InputLabel>
              <Input id='lengthOfGensetCable' 
                     name='lengthOfGensetCable' 
                     value={this.state.lengthOfGensetCable}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfRemoteStartCable'>Length Of Remote Start Cable</InputLabel>
              <Input id='lengthOfRemoteStartCable' 
                     name='lengthOfRemoteStartCable'
                     value={this.state.lengthOfRemoteStartCable}
                     onChange={this.handleChange}   
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfGenBatteryCable'>Length Of Genset Battery Cable (m)</InputLabel>
              <Input id='lengthOfGenBatteryCable' 
                     name='lengthOfGenBatteryCable'
                     value={this.state.lengthOfGenBatteryCable}
                     onChange={this.handleChange}   
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOfCANCable'>Length Of CAN Cable (m)</InputLabel>
              <Input id='lengthOfCANCable' 
                     name='lengthOfCANCable' 
                     value={this.state.lengthOfCANCable}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='totalLengthofLoadCable'>Total Length Of Load Cable (m)</InputLabel>
              <Input id='totalLengthofLoadCable' 
                     name='totalLengthofLoadCable' 
                     value={this.state.totalLengthofLoadCable}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='lengthOFShelter_CabinetCoolingCable'>Length OF Shelter/Cabinet Cooling Cable (m)</InputLabel>
              <Input id='lengthOFShelter_CabinetCoolingCable' 
                     name='lengthOFShelter_CabinetCoolingCable' 
                     value={this.state.lengthOFShelter_CabinetCoolingCable}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='existingRetifierAndDBDistance:'>Existing Retifier And DB Distance: (m)</InputLabel>
              <Input id='existingRetifierAndDBDistance' 
                     name='existingRetifierAndDBDistance' 
                     value={this.state.existingRetifierAndDBDistance}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>

            <Typography variant='h5'>Site Physical Survey</Typography>
            <InputLabel htmlFor='x10StandRequired' style={{margin:"10px"}}>X10 Installation Stand Required?</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                      name: 'x10StandRequired',
                      id: 'x10StandRequired'
                          }}   
                    value={this.state.x10StandRequired}
                    onChange={this.handleChange} >
                 <option aria-label="None" value="" />
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            {this.state.gridAvailable === "Yes" &&
            <InputLabel htmlFor='existingPlinthSuitableForX10Stand' style={{margin:"10px"}}>
                                Existing Plinth Suitable For X10 Stand?
            <Select native 
                    required 
                    fullWidth
                    inputProps={{
                      name: 'existingPlinthSuitableForX10Stand',
                      id: 'existingPlinthSuitableForX10Stand',
                          }}   
               
                    value={this.state.existingPlinthSuitableForX10Stand}
                    onChange={this.handleChange} >
                 <option aria-label="None" value="" />
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            </InputLabel>}
            <InputLabel htmlFor='allTenantDBAvailable' style={{margin:"10px"}}>All Tenants DBs Available?</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                      name: 'allTenantDBAvailable',
                      id: 'allTenantDBAvailable'
                          }}   
                    value={this.state.allTenantDBAvailable}
                    onChange={this.handleChange} >
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            <InputLabel htmlFor='earthingSystemSuitable' style={{margin:"10px"}}>Earthing System Suitable?</InputLabel>
            <Select native 
                    required 
                    fullWidth
                    inputProps={{
                      name: 'earthingSystemSuitable',
                      id: 'earthingSystemSuitable'
                          }}   
                    value={this.state.earthingSystemSuitable}
                    onChange={this.handleChange} >
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            <InputLabel htmlFor='earthingPointAvailable' style={{margin:"10px"}}>Earthing Point Available for X10?</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                      name: 'earthingPointAvailable',
                      id: 'earthingPointAvailable'
                          }}
                    value={this.state.earthingPointAvailable}
                    onChange={this.handleChange} >
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
              Submit/Next
            </Button>
          </form>
          <Button
              variant='contained'
              fullWidth
              color='primary'
              className={classes.submit}
              onClick={this.goPrevious}
             >
              Previous
          </Button>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(TssForm2);