import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import Table from "./Table"
import GenTable from "./GenTable"
import TenantForm from "./TenantForm"
import GensetForm from "./GensetForm"
import TssExtraLoad from "./TssExtraLoad"
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import withStyles from "@material-ui/core/styles/withStyles";



const styles = theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: "white"
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      backgroundColor: "#069c40",
      "&:hover" :{
        backgroundColor: "#1ae067",
       }
    }
  });



class TssForm4 extends Component {
    
    static defaultProps = {
        tenantLoadParameter: ["Equipment", "Current (A)", "Voltage (V)", "Power(W)", "Position", "Cooling", ""],
        gensetDetailsParamental: ["Brand", "Module Model", "Module Status","Engine Status", "Runhour (Hour)", "Capacity (KVA)", "Output", "Remote Start", "Alarm Output", "" ]
      };

    constructor(props){
        super(props);

        this.state= {
            showTenantLoad: false,
            showExtraLoad: false,
            showGensetDetails: false,
            showTableList: true,
            tenantList: new Set(),
            tenantLoads: [],
            gensetDetails:[],
            additionalLoad: [],
            categorisedTenants: []
        }

        this.addTenantLoad = this.addTenantLoad.bind(this);
        this.addGensetDetails = this.addGensetDetails.bind(this);
        this.showTenantLoadForm = this.showTenantLoadForm.bind(this);
        this.showExtraLoadForm = this.showExtraLoadForm.bind(this);
        this.cancelForm = this.cancelForm.bind(this);
        this.showGensetDetailsForm = this.showGensetDetailsForm.bind(this);
        this.prepareTenantTable = this.prepareTenantTable.bind(this);
        this.removeTenantLoad = this.removeTenantLoad.bind(this);
        this.addExtraLoad = this.addExtraLoad.bind(this); 
        this.removeExtraLoad = this.removeExtraLoad.bind(this); 
        this.removeGenset = this.removeGenset.bind(this); 
        this.submitForm4 = this.submitForm4.bind(this); 
        this.goPrevious = this.goPrevious.bind(this); 
    }

    componentDidMount(){
      if (this.props.prevFormPage === 5) {
          this.setState({
            tenantLoads:this.props.currentState.tenantLoads,
            gensetDetails: this.props.currentState.gensetDetails,
            additionalLoad: this.props.currentState.additionalLoad,
            categorisedTenants: this.props.currentState.categorisedTenants
          })
      }
  }

   prepareTenantTable(state){
       let tenants = [];
      //  console.log(state.tenantList);
       state.tenantList.forEach(function(tenant){
           let singleTenant  = [];
           let tenantObj = {};
           let singleTenantLoad= 0;
           let tenantName = null;
            state.tenantLoads.map(function(item){
                if(item.networkName === tenant){
                    singleTenantLoad = singleTenantLoad + item.loadPowerWatt;
                    singleTenant.push(item);
                    tenantName = item.networkName;
                }
                console.log(singleTenant)
            })
          
            tenantObj.network = singleTenant;
            tenantObj.tenantLoad = singleTenantLoad;
            tenants.push(tenantObj);
       })
      //  console.log("From prepareTenantTable function")
      //  console.log(tenants);
       this.setState({ categorisedTenants: tenants})
   }

   addTenantLoad(data){
    this.setState({
        tenantLoads: [
          ...this.state.tenantLoads, data
        ],
        showTenantLoad: false,
        showTableList:true,
        tenantList: this.state.tenantList.add(data.networkName),
        // getTenantTable: this.prepareTenantTable()
      }, () => {
            this.prepareTenantTable(this.state);
      });
   }
   addExtraLoad(data){
     console.log("Submiting extraload form in tssform4 ")
    this.setState({
      additionalLoad: [
          ...this.state.additionalLoad, data
        ],
        showExtraLoad: false,
        showTableList:true,
      });
   }

   addGensetDetails(data){
    console.log("From add gensetfunction function..ID: "+ JSON.stringify(data));
    this.setState(st => ({
      gensetDetails: [
          ...st.gensetDetails, data
        ],
        showGensetDetails:false,
        showTableList:true
      }));
   }

   removeTenantLoad(id){
    console.log("From remove load function..ID: "+id)
    this.setState({
      tenantLoads: this.state.tenantLoads.filter(t => t.id !== id)
    }, () => {
      this.state.tenantList.clear();
      this.state.tenantLoads.map(t => {
        this.state.tenantList.add(t.networkName)
      })
      this.prepareTenantTable(this.state);
    });
   }
   removeExtraLoad(id){
    // console.log("From remove load function..ID: "+id)
    this.setState({
      additionalLoad: this.state.additionalLoad.filter(extra => extra.id !== id)
    });
   }
   removeGenset(id){
    // console.log("From remove load function..ID: "+id)
    this.setState({
      gensetDetails: this.state.gensetDetails.filter(gen => gen.id !== id)
    });
   }

   showTenantLoadForm(){
    this.setState({
        showTenantLoad: true,
        showTableList:false
    })
   }
   showExtraLoadForm(){
    this.setState({
        showExtraLoad: true,
        showTableList:false
    })
   }

   showGensetDetailsForm(){
       this.setState({
           showGensetDetails: true,
           showTableList:false
       })
   } 

   submitForm4(evt){
    evt.preventDefault();
    this.props.submitForm4({tenantLoads: this.state.tenantLoads,
                            gensetDetails: this.state.gensetDetails,
                            additionalLoad: this.state.additionalLoad,
                            categorisedTenants:this.state.categorisedTenants});
    console.log("Data from TSSForm4 Submit")
    this.props.changeFormPage(1);
   }

   goPrevious(){
    this.props.changeFormPage(-1);
  }

   cancelForm(){
    this.setState({
      showGensetDetails: false,
      showTableList:true,
      showTenantLoad:false,
      showExtraLoad:false
     })
   }



render(){
    const { classes } = this.props;
    let totalLoad = 0;
    let totalExtraLoad = 0;
    console.log(this.state.categorisedTenants)
    const tenantTableList = this.state.categorisedTenants.map(tenant => {
        let networkName = tenant.network[0].networkName
        totalLoad = totalLoad + tenant.tenantLoad;
        console.log("This from TssForm4" + JSON.stringify(tenant.network))
       return ( this.state.showTableList &&  <Table     tenant={tenant.network} 
                                                        column={this.props.tenantLoadParameter}
                                                        removeLoad={this.removeTenantLoad}
                                                        tenantLoad={tenant.tenantLoad}
                                                        networkName={networkName} 
                                                        showDelete= {true}                                            
                                             /> ) 
       });
     this.state.additionalLoad.map(item => {
              totalLoad = totalLoad + item.loadPowerWatt;
              totalExtraLoad = totalExtraLoad + item.loadPowerWatt;  
        });
    
   
    return (
        <Container >
           <Toolbar
                className={classes.root}>
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                   Total SiteLoad: {totalLoad}
                </Typography>
                <IconButton aria-label="filter list" 
                            id="addTenant"
                            onClick={this.showTenantLoadForm}>
                    <PostAddIcon />
                    <Typography variant="h6">Add Tenant</Typography>
                 </IconButton>
                 <IconButton aria-label="filter list" 
                             id="addExtralLoad"
                             onClick={this.showExtraLoadForm}>
                    <PostAddIcon />
                    <Typography variant="h6">Add Extral Load</Typography>
                 </IconButton>
                <IconButton aria-label="filter list"
                            id="addGenset"
                            onClick={this.showGensetDetailsForm}>
                    <PostAddIcon />
                    <Typography variant="h6"> Add Genset</Typography>
                 </IconButton>

            </Toolbar>
           {tenantTableList}
           {(this.state.showTableList && tenantTableList.length === 0) && <Table 
                                             tenant={[]}
                                             column={this.props.tenantLoadParameter}
                                             tenantLoad={0}
                                             networkName="No TenantLoad ?"
                                             showDelete= {true} />}
           <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
           {this.state.showTableList && <Table tenant={this.state.additionalLoad} 
                      column={this.props.tenantLoadParameter}
                      removeLoad={this.removeExtraLoad}
                      tenantLoad={totalExtraLoad}
                      networkName="Extra Load" 
                      showDelete= {true}                                             
                      />}
            <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
           {this.state.showTableList && <GenTable gensets={this.state.gensetDetails} 
                      column={this.props.gensetDetailsParamental}
                      removeLoad={this.removeGenset}
                      showDelete= {true} 
                      networkName="Genset(s)"                                             
                      />}
           {this.state.showTenantLoad &&  <TenantForm 
                           addTenantLoad={this.addTenantLoad}
                           cancelForm={this.cancelForm}/>} 
           {this.state.showExtraLoad &&  <TssExtraLoad 
                           addExtraLoad={this.addExtraLoad}
                           cancelForm={this.cancelForm}/>} 
           {this.state.showGensetDetails &&  <GensetForm 
                           addGensetDetails={this.addGensetDetails}
                           cancelForm={this.cancelForm} />} 
           <Divider style={{marginTop: "30px", marginBottom:"30px"}}/>
           <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
           {this.state.showTableList && <Button
              variant='contained'
              type='submit'
              style={{width: "35%"}}
              color='primary'
              className={classes.submit}
              onClick={this.submitForm4}
             >
              Submit/Next
            </Button>}
            <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>
            {this.state.showTableList && <Button
              variant='contained'
              type='submit'
              style={{width: "35%"}}
              color='primary'
              className={classes.submit}
              onClick={this.goPrevious}
             >
              Previous
            </Button>}
            </div>

        </Container >
      );
    }
  
}

export default withStyles(styles,{ withTheme: true })(TssForm4);