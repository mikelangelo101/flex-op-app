import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection:"column",
      flexGrow: 1,
      maxWidth: "80%",
      justifyContent: "center" ,
      paddingLeft: "50px"
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    list: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
            },
        padding: "5px"
    }
  }),
);


export default function List3 (props) {
  const classes = useStyles();
  const { existingSolution} = props;

  return (
            <List dense={true}>
                <ListItem >
                  <ListItemText
                    primary="Availability Solar Panels"
                  /> 
                  <ListItemSecondaryAction>
                     {existingSolution.solarPanelsAvailable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of Solar Panels Available"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.numberOfSolarPanelsAvailable : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Solar Panel Brand"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.solarPanelBrand : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Solar Panel OC Voltage"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.solarPanelOCVoltage : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Solar Panel Peak Wattage"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.solarPanelPeakWattage : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of Bad Solar Panels"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.numberofBadSolarPanels : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of Solar Arrays"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.numberOfSolarArrays : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Functioning Junction Boxes"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.functioningJunctionBoxes : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Solar Controller Brand"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.solarChargeControllerBrand : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Solar Controller Total MaxPower "
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.solarPanelsAvailable === "Yes" ? existingSolution.solarChargeControllerTotalMaxPower : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Rectifier Installed"
                  /> 
                  <ListItemSecondaryAction>
                     {existingSolution.rectifierInstalled}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Rectifier Brand"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.rectifierBrand : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of Rectifier Module"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.numberOfRectifierModule : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Capacity Of Rectifier Module"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.capacityOfRectifierModule : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number of Rectifier Racks"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.numberofRectifierRacks : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Total Rectifier Installed (kW)"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.totalCapacityOfRectifierInstalled : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Rectifier Installation Position"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.rectifierInstalled === "Yes" ? existingSolution.rectifierInstallationPosition : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </List>
  );
}
