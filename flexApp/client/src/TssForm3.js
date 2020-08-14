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
import Divider from '@material-ui/core/Divider';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyle";





class TssForm3 extends Component {
  
   constructor(props){
       super(props);

       this.state= {
           solarPanelsAvailable:"",
           numberOfSolarPanelsAvailable:"",
           solarPanelBrand:"",
           solarPanelOCVoltage:"",
           solarPanelPeakWattage:"",
           numberofBadSolarPanels:"",
           numberOfSolarArrays:"",
           functioningJunctionBoxes:"",
           solarChargeControllerBrand:"",
           solarChargeControllerTotalMaxPower:"",
           rectifierInstalled:"",
           rectifierBrand:"",
           numberOfRectifierModule:"",
           capacityOfRectifierModule:"",
           numberofRectifierRacks:"",
           totalCapacityOfRectifierInstalled:"",
           rectifierInstallationPosition:"",
           batteryBankInstalled:"",
           batteryBrand:"",
           batteryCellVoltage:"",
           batteryCellAmpsHour:"",
           numberOfBadBatteryCell:"",
           batteryStringInstalled:"",
           totalNumberOfBatteries:"",
           batteryInstalledPosition:"",
           batteryCabinetStatus:"",
           batteryCabinetCoolingType:"",
           shelterACInstalled:"",
           numberOfACsInstalled:"",
           powerRatingOfEachShelterAC:"",
           gridAvailable:"",
           gridSupplySource:"",
           gridDistanceToX10Stand:"",
           gridComment:""
       }

       this.handleSubmit = this.handleSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.goPrevious = this.goPrevious.bind(this)
   } 

   componentDidMount(){
       if (this.props.prevFormPage === 4) {
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
    this.props.submitForm3({ ...this.state });
    console.log("Data from TSSForm3 Submit" + this.state)
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
            <Typography variant='h5'>Existing Solution On site</Typography>
            <Divider />
            {/* Solar Data Form */}
            
            <InputLabel htmlFor='solarPanelsAvailable' style={{margin:"10px"}} >Solar Panels Available?</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'solarPanelsAvailable',
                        id: 'solarPanelsAvailable'
                      }}
                    value={this.state.solarPanelsAvailable}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />       
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>

            {this.state.solarPanelsAvailable === "Yes" && 
            <FormControl margin='normal' required fullWidth>
               <InputLabel htmlFor='numberOfSolarPanelsAvailable'>Number Of Solar Panels Available</InputLabel>
               <Input id='numberOfSolarPanelsAvailable' 
                      name='numberOfSolarPanelsAvailable'
                      value={this.state.numberOfSolarPanelsAvailable}
                      onChange={this.handleChange}  
                      autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" && 
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='solarPanelBrand'>Solar Panel Brand</InputLabel>
              <Input id='solarPanelBrand' 
                     name='solarPanelBrand' 
                     value={this.state.solarPanelBrand}
                     onChange={this.handleChange} 
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='solarPanelOCVoltage'>Solar Panel Open Circuit Voltage(V) </InputLabel>
              <Input id='solarPanelOCVoltage' 
                     name='solarPanelOCVoltage'
                     value={this.state.solarPanelOCVoltage}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='solarPanelPeakWattage'>Solar Panel Peak Power(W)</InputLabel>
              <Input id='solarPanelPeakWattage' 
                     name='solarPanelPeakWattage'
                     value={this.state.solarPanelPeakWattage}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='numberofBadSolarPanels'>Number of Bad Solar Panels</InputLabel>
              <Input id='numberofBadSolarPanels' 
                     name='numberofBadSolarPanels'
                     value={this.state.numberofBadSolarPanels}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='numberOfSolarArrays'>Number Of Solar Arrays</InputLabel>
              <Input id='numberOfSolarArrays' 
                     name='numberOfSolarArrays'
                     value={this.state.numberOfSolarArrays}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <InputLabel htmlFor='functioningJunctionBoxes' style={{margin:"10px"}}>Functioning Junction Boxes?
            <Select native
                    required 
                    fullWidth 
                    inputProps={{
                        name: 'functioningJunctionBoxes',
                        id: 'functioningJunctionBoxes'
                      }}
                    value={this.state.functioningJunctionBoxes}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" />
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            </InputLabel>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' fullWidth>
              <InputLabel htmlFor='solarChargeControllerBrand'>Solar Charge Controller Brand</InputLabel>
              <Input id='solarChargeControllerBrand' 
                     name='solarChargeControllerBrand'
                     value={this.state.solarChargeControllerBrand}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.solarPanelsAvailable === "Yes" &&
            <FormControl margin='normal' fullWidth>
              <InputLabel htmlFor='solarChargeControllerTotalMaxPower'>
                          Solar Charge Controller Total MaxPower (kW)</InputLabel>
              <Input id='solarChargeControllerTotalMaxPower' 
                     name='solarChargeControllerTotalMaxPower'
                     value={this.state.solarChargeControllerTotalMaxPower}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            
            {/* Rectifier Data Form */}

            <InputLabel htmlFor='rectifierInstalled' style={{margin:"10px"}}>Rectifier Installed?</InputLabel>
            <Select native
                    required 
                    fullWidth 
                    inputProps={{
                    name: 'rectifierInstalled',
                    id: 'rectifierInstalled'
                    }}
                    value={this.state.rectifierInstalled}
                    onChange={this.handleChange}>
                  <option aria-label="None" value="" /> 
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
            </Select>
 
            {this.state.rectifierInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='rectifierBrand'>Rectifier Brand</InputLabel>
              <Input id='rectifierBrand' 
                     name='rectifierBrand'
                     value={this.state.rectifierBrand}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.rectifierInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='numberOfRectifierModule'>Number Of Rectifier Module</InputLabel>
              <Input id='numberOfRectifierModule' 
                     name='numberOfRectifierModule'
                     value={this.state.numberOfRectifierModule}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.rectifierInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='capacityOfRectifierModule'>Capacity Of Rectifier Module</InputLabel>
              <Input id='capacityOfRectifierModule' 
                     name='capacityOfRectifierModule'
                     value={this.state.capacityOfRectifierModule}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.rectifierInstalled === "Yes" &&
            <FormControl margin='normal' fullWidth>
              <InputLabel htmlFor='numberofRectifierRacks'>Number Of Rectifier Racks</InputLabel>
              <Input id='numberofRectifierRacks' 
                     name='numberofRectifierRacks'
                     value={this.state.numberofRectifierRacks}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.rectifierInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='totalCapacityOfRectifierInstalled'>Total Capacity Of Rectifier Installed</InputLabel>
              <Input id='totalCapacityOfRectifierInstalled' 
                     name='totalCapacityOfRectifierInstalled'
                     value={this.state.totalCapacityOfRectifierInstalled}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.rectifierInstalled === "Yes" &&
            <InputLabel htmlFor='rectifierInstallationPosition' style={{margin:"10px"}}>Rectifier Installation Position
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'rectifierInstallationPosition',
                        id: 'rectifierInstallationPosition'
                        }}        
                    value={this.state.rectifierInstallationPosition}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Outdoor'>Outdoor</option>
                 <option value='Indoor'>Indoor</option>
            </Select>
            </InputLabel>}

            {/* Battery Data Form */}

            <InputLabel htmlFor='batteryBankInstalled' style={{margin:"10px"}}>Battery Bank Installed? </InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'batteryBankInstalled',
                        id: 'batteryBankInstalled'
                            }}
                    value={this.state.batteryBankInstalled}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='batteryBrand'>Battery Brand</InputLabel>
              <Input id='batteryBrand' 
                     name='batteryBrand'
                     value={this.state.batteryBrand}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='batteryCellVoltage'>Battery Cell Voltage (V)</InputLabel>
              <Input id='batteryCellVoltage' 
                     name='batteryCellVoltage'
                     value={this.state.batteryCellVoltage}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='batteryCellAmpsHour'>Battery Cell Amps Hour (AH)</InputLabel>
              <Input id='batteryCellAmpsHour' 
                     name='batteryCellAmpsHour'
                     value={this.state.batteryCellAmpsHour}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='numberOfBadBatteryCell'>Number Of Bad Battery Cell</InputLabel>
              <Input id='numberOfBadBatteryCell' 
                     name='numberOfBadBatteryCell'
                     value={this.state.numberOfBadBatteryCell}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='batteryStringInstalled'>Number Battery String Installed</InputLabel>
              <Input id='batteryStringInstalled' 
                     name='batteryStringInstalled'
                     value={this.state.batteryStringInstalled}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
            {this.state.batteryBankInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='totalNumberOfBatteries'>Total Number Of Batteries</InputLabel>
              <Input id='totalNumberOfBatteries' 
                     name='totalNumberOfBatteries'
                     value={this.state.totalNumberOfBatteries}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}
           {this.state.batteryBankInstalled === "Yes" &&
            <InputLabel htmlFor='batteryInstalledPosition'style={{margin:"10px"}}>Battery Installation Position
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'batteryInstalledPosition',
                        id: 'batteryInstalledPosition'
                            }} 
                    value={this.state.batteryInstalledPosition}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Outdoor'>Outdoor</option>
                 <option value='Indoor'>Indoor</option>
            </Select>
            </InputLabel>}
           {this.state.batteryBankInstalled === "Yes" &&
            <InputLabel htmlFor='batteryCabinetStatus' style={{margin:"10px"}}>Battery Cabinet Status
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'batteryCabinetStatus',
                        id: 'batteryCabinetStatus'
                            }}
                    value={this.state.batteryCabinetStatus}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Good With Cooling'>Good With Cooling</option>
                 <option value='Good But No Cooling'>Good But No Cooling</option>
                 <option value='Bad With Cooling'>Bad With Cooling</option>
                 <option value='Bad And No Cooling'>Bad And No Cooling</option>
                 <option value='Indoor With Cooling'>Indoor With Cooling</option>
                 <option value='Indoor But No Cooling'>Indoor But No Cooling</option>
            </Select>
            </InputLabel>}
           {this.state.batteryBankInstalled === "Yes" &&
            <InputLabel htmlFor='batteryCabinetCoolingType' style={{margin:"10px"}}>Battery Cabinet Cooling Type
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'batteryCabinetCoolingType',
                        id: 'batteryCabinetCoolingType'
                            }}
                        
                    value={this.state.batteryCabinetCoolingType}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option  value='DC Air Condition'>DC Air Condition</option >
                 <option  value='AC Air Condition'>AC Air Condition</option >
                 <option  value='Fan Convection'>Fan Convection</option >
                 <option  value='No Cooling'>No Cooling</option >
            </Select>
            </InputLabel>}

            {/* Shelter Form */}
            <InputLabel htmlFor='shelterACInstalled' style={{margin:"10px"}}>Shelter AC Installed?</InputLabel>
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'shelterACInstalled',
                        id: 'shelterACInstalled'
                            }}
                    value={this.state.shelterACInstalled}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
           {this.state.shelterACInstalled === "Yes" &&
            <InputLabel htmlFor='numberOfACsInstalled' style={{margin:"10px"}}>Number Of ACs Installed
            <Select native 
                    required 
                    fullWidth
                    inputProps={{
                        name: 'numberOfACsInstalled',
                        id: 'numberOfACsInstalled'
                            }}
                        
                    value={this.state.numberOfACsInstalled}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='1'>1</option>
                 <option value='2'>2</option>
                 <option value='3'>3</option>
                 <option value='4'>4</option>
                 <option value='5'>5</option>
                 <option value='More Than 5'>More Than 5</option>
            </Select>
            </InputLabel>}
            {this.state.shelterACInstalled === "Yes" &&
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='powerRatingOfEachShelterAC' >Power Rating Of Each Shelter AC (kW)</InputLabel>
              <Input id='powerRatingOfEachShelterAC' 
                     name='powerRatingOfEachShelterAC'
                     value={this.state.powerRatingOfEachShelterAC}
                     onChange={this.handleChange}  
                     autoFocus />
            </FormControl>}

             {/* Grid data Form */}
           
            <InputLabel htmlFor='gridAvailable' style={{margin:"10px"}}>Grid/Mains Available?
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'gridAvailable',
                        id: 'gridAvailable'
                            }}  
                    value={this.state.gridAvailable}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Yes'>Yes</option>
                 <option value='No'>No</option>
            </Select>
            </InputLabel>
           {this.state.gridAvailable === "Yes" &&
            <InputLabel htmlFor='gridSupplySource' style={{margin:"10px"}}>Grid Supply Source
            <Select native
                    required 
                    fullWidth
                    inputProps={{
                        name: 'gridSupplySource',
                        id: 'gridSupplySource'
                            }}
                        
                    value={this.state.gridSupplySource}
                    onChange={this.handleChange}>
                 <option aria-label="None" value="" /> 
                 <option value='Outdoor'>Private Dedicated Transformer</option>
                 <option value='Indoor'>Community Transformer</option>
                 <option value='Indoor'>Residential Landlord Supply</option>
            </Select>
            </InputLabel>}
           {this.state.gridAvailable === "Yes" &&
            <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='gridDistanceToX10Stand'>Grid Source Distance To X10 Stand (m)</InputLabel>
            <Input id='gridDistanceToX10Stand' 
                   name='gridDistanceToX10Stand'
                   value={this.state.gridDistanceToX10StandC}
                   onChange={this.handleChange}  
                   autoFocus />
          </FormControl>}
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
export default withStyles(styles)(TssForm3);