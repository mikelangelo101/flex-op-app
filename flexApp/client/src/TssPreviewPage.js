import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Table from "./Table"
import GenTable from "./GenTable"
import List1 from "./List1"
import List2 from "./List2"
import List3 from "./List3"
import List4 from "./List4"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "block",
      flexGrow: 1,
      width:"auto"
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
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      backgroundColor: "#069c40",
      "&:hover" :{
        backgroundColor: "#1ae067",
       }
    }
  }),
);

const tenantLoadParameter = ["Equipment", "Current (A)", "Voltage (V)", "Power(W)", "Position", "Cooling", ""];
const gensetDetailsParamental = ["Brand", "Module Model", "Module Status","Engine Status", "Runhour (Hour)", "Capacity (KVA)", "Output", "Remote Start", "Alarm Output", "" ]




export default function InteractiveList(props) {
  const classes = useStyles();
  const {siteDetails, cableRequirement, existingSolution, categorisedTenants, additionalLoad, gensetDetails } = props;
  let totalLoad = 0;
  let totalExtraLoad = 0;
  console.log(categorisedTenants)
  const tenantTableList = categorisedTenants.map(tenant => {
      let networkName = tenant.network[0].networkName
      totalLoad = totalLoad + tenant.tenantLoad;
      console.log("This from TssPreviewPage" + JSON.stringify(tenant.network))
     return ( <Table  tenant={tenant.network} 
                      column={tenantLoadParameter}
                      tenantLoad={tenant.tenantLoad}
                      networkName={networkName}                                             
                  /> ) 
     });
   additionalLoad.map(item => {
            totalLoad = totalLoad + item.loadPowerWatt;
            totalExtraLoad = totalExtraLoad + item.loadPowerWatt;  
      });

  return (
    <div className="container">
    <div className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            Total Site Load: {totalLoad}
          </Typography>
           {tenantTableList}
           { tenantTableList.length === 0 && <Table 
                                             tenant={[]}
                                             column={tenantLoadParameter}
                                             tenantLoad={0}
                                             showDelete= {false}
                                             networkName="No TenantLoad "/>}
           <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
            <Table    tenant={additionalLoad} 
                      column={tenantLoadParameter}
                      tenantLoad={totalExtraLoad}
                      showDelete= {false}
                      networkName="Extra Load"                                             
                      />
            <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
           <GenTable gensets={gensetDetails} 
                      column={gensetDetailsParamental}
                      showDelete= {false}
                      networkName="Genset(s)"                                             
                      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Site Details
          </Typography>
          <div className={classes.demo}>
            <List1 siteDetails={siteDetails}  cableRequirement={cableRequirement}/>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Cable Requirement
          </Typography>
          <div className={classes.demo}>
             <List2  cableRequirement={cableRequirement}/>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Solar/Rectifier
          </Typography>
          <div className={classes.demo}>
            <List3  existingSolution={existingSolution}/>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Battery/Others
          </Typography>
          <div className={classes.demo}>
              <List4  existingSolution={existingSolution}/>
          </div>
        </Grid>
      </Grid>
      <Divider style={{marginTop: "30px", marginBottom:"30px"}}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
             <Button
               variant='contained'
               type='submit'
               style={{width: "35%"}}
               color='primary'
               className={classes.submit}
               onClick={() => {
                props.submitPreviewPage();
               }}
              >
               Final Submision
             </Button>
             <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
             <Button
               variant='contained'
               type='submit'
               style={{width: "35%"}}
               color='primary'
               className={classes.submit}
               onClick={() => {
                props.changeFormPage(-1);
               }}
              >
               Previous
             </Button>
             </div>

    </div>
  </div>
  );
}
