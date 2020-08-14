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


export default function List4 (props) {
  const classes = useStyles();
  const { existingSolution} = props;

  return (
            <List dense={true}>
                <ListItem >
                  <ListItemText
                    primary="Battery Bank Installed"
                  /> 
                  <ListItemSecondaryAction>
                     {existingSolution.batteryBankInstalled}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Battery Brand"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryBrand : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Battery Cell Voltage (V)"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryCellVoltage : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Battery Cell Amps Hour (AH)"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryCellAmpsHour: "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of Bad Battery Cell"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.numberOfBadBatteryCell : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number of Strings Installed"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryStringInstalled : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Total Number Of Batteries"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.totalNumberOfBatteries : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Battery Installation Position"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryInstalledPosition : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Battery Cabinet Status"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryCabinetStatus : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Cabinet Cooling Type "
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.batteryBankInstalled === "Yes" ? existingSolution.batteryCabinetCoolingType : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Shelter AC Installed"
                  /> 
                  <ListItemSecondaryAction>
                     {existingSolution.shelterACInstalled}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Number Of ACs Installed"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.shelterACInstalled === "Yes" ? existingSolution.numberOfACsInstalled : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Power Rating Of Each AC"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.shelterACInstalled === "Yes" ? existingSolution.powerRatingOfEachShelterAC : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Grid Available"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.gridAvailable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Grid Supply Source"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.gridAvailable === "Yes" ? existingSolution.gridSupplySource : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Grid Distance To X10 Stand (m)"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.gridAvailable === "Yes" ? existingSolution.gridDistanceToX10Stand : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Grid Comment"
                  /> 
                  <ListItemSecondaryAction>
                  {existingSolution.gridAvailable === "Yes" ? existingSolution.gridComment : "N/A"}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </List>
  );
}
