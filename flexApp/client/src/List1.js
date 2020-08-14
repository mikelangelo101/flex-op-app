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
        "&:nth-child(even)": {backgroundColor: "#f2f2f2"},
        padding: "5px"
    }
  }),
);




export default function List1 (props) {
  const classes = useStyles();
  const {siteDetails, cableRequirement} = props;


  return (
            <List dense={true}>
                <ListItem >
                  <ListItemText
                    primary="Site Name"
                  /> 
                  <ListItemSecondaryAction>
                     {siteDetails.siteName}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Site ID"
                  /> 
                  <ListItemSecondaryAction>
                  {siteDetails.siteId}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Longitude /Latitute"
                  /> 
                  <ListItemSecondaryAction>
                     {`${siteDetails.longitude} / ${siteDetails.latitute} `}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Date Time"
                  /> 
                  <ListItemSecondaryAction>
                     {siteDetails.dateTime}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Site Security"
                  /> 
                  <ListItemSecondaryAction>
                     {`${siteDetails.siteSecurityName} / ${siteDetails.siteSecurityContact}`}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Site FSE"
                  /> 
                  <ListItemSecondaryAction>
                  {`${siteDetails.siteFSEName} / ${siteDetails.siteFSEContact}`}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Site Area Location"
                  /> 
                  <ListItemSecondaryAction>
                     {siteDetails.siteAreaLocation}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="SiteType / Antenna Support"
                  /> 
                  <ListItemSecondaryAction>
                  {`${siteDetails.siteType} / ${siteDetails.antennaSupport}`}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Equipment Housing"
                  /> 
                  <ListItemSecondaryAction>
                     {siteDetails.equipmentHousing}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Available Power Sources"
                  /> 
                  <ListItemSecondaryAction>
                  {siteDetails.availablePowerSource}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Requirement for X10 Stand"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.x10StandRequired}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Availability of Good Plinth"
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.existingPlinthSuitableForX10Stand}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </List>
  );
}
