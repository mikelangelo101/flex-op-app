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



export default function List2 (props) {
  const classes = useStyles();
  const { cableRequirement} = props;

  return (
            <List dense={true}>
                <ListItem >
                  <ListItemText
                    primary="Length Of Battery Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.lengthOfBatteryCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Length Of Earth Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.lengthOfEarthCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Length Of Genset Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.lengthOfGensetCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Length Of Remote Start Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.lengthOfRemoteStartCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Length Of Gen Battery Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.lengthOfGenBatteryCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Length Of CAN Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.lengthOfCANCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Total Length Of Load Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.totalLengthofLoadCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Shelter/Cabinet Cooling Cable (m)"
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.lengthOFShelter_CabinetCoolingCable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Existing Retifier/DB Distance (m)"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.existingRetifierAndDBDistance}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="All Tenant Has DBs "
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.allTenantDBAvailable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Earthing System Suitable"
                  /> 
                  <ListItemSecondaryAction>
                     {cableRequirement.earthingSystemSuitable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
                <ListItem >
                  <ListItemText
                    primary="Earthing Point Available"
                  /> 
                  <ListItemSecondaryAction>
                  {cableRequirement.earthingPointAvailable}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </List>
  );
}
