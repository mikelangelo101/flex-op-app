import React, { useContext, Component } from 'react';
import axios from "axios";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles"; 
import { DrawerContext } from "./contexts/DrawerContext";
import Main from "./Main";
import TssValidForm from "./TssValidForm"
import TssForm1 from "./TssForm1"
import TssForm2 from "./TssForm2"
import TssForm3 from "./TssForm3"
import TssForm4 from "./TssForm4"
import TssForm5 from "./TssForm5"
import TssPreviewPage from "./TssPreviewPage"
import styles from "./styles/MainStyles";


class Tss extends Component  {
   constructor(props){
       super(props)
       
       this.state ={
           validInfo:{},
           siteDetails : {},
           cableRequirement: {},
           existingSolution: {},
           tenantLoads: [],
           gensetDetails: [],
           additionalLoad: [],
           categorisedTenants: [],
           requiredPictures: [],
           formPage: 0,
           prevFormPage:0,
           images: []  
       }
       this.submitValidForm = this.submitValidForm.bind(this);
       this.changeFormPage = this.changeFormPage.bind(this); 
       this.submitForm1 = this.submitForm1.bind(this);
       this.submitForm2 = this.submitForm2.bind(this);
       this.submitForm3 = this.submitForm3.bind(this);
       this.submitForm4 = this.submitForm4.bind(this);
       this.submitForm5 = this.submitForm5.bind(this);
       this.submitPreviewPage = this.submitPreviewPage.bind(this);
       this.getRequiredPictures = this.getRequiredPictures.bind(this);
   } 
   static contextType = DrawerContext;

   componentDidMount(){
      this.getRequiredPictures();
   }


   submitValidForm(info){
    // this.setState({...this.state.validInfo, ...info}); 
    this.setState(st => ({
        validInfo: {...st.validInfo, ...info}
      }));

   }

   submitForm1(form1Data){
    //  this.setState({...this.state.siteDetails, ...form1Data});
    this.setState(st => ({
        siteDetails: {...st.siteDetails, ...form1Data}
      }));

   }
   submitForm2(form2Data){
    //  this.setState({...this.state.cableRequirement, ...form2Data});
    this.setState(st => ({
        cableRequirement: {...st.cableRequirement, ...form2Data}
      }));
   }

   submitForm3(form3Data){
    this.setState(st => ({
     existingSolution: {...st.existingSolution, ...form3Data}
   }));
}


   submitForm4(form4Data){
    this.setState({
      tenantLoads: form4Data.tenantLoads,
      gensetDetails: form4Data.gensetDetails,
      additionalLoad: form4Data.additionalLoad,
      categorisedTenants: form4Data.categorisedTenants
   }, () => {
      this.getRequiredPictures();
   });
}
   submitForm5(form5Data){
    this.setState(st => ({
         images: [...this.state.images, ...form5Data]
   }));
 }
   submitPreviewPage(){
   console.log("Preview Page")
   let TssData = {
      validInfo:this.state.validInfo,
      siteDetails : this.state.siteDetails,
      cableRequirement: this.state.cableRequirement,
      existingSolution: this.state.existingSolution,
      tenantLoads: this.state.tenantLoads,
      gensetDetails: this.state.gensetDetails,
      additionalLoad: this.state.additionalLoad,
      categorisedTenants: this.state.categorisedTenants
      // images: this.state.images
   }
   axios({
      method: 'post',
      url: "/api/tssSubmit",
      crossdomain: true, 
      data: TssData
    })
    .then((response) => {
    console.log(response.data);	
    this.props.history.push("/main");	
    })
    .catch((error) => {
    console.log(">>>>>.....>>>>: " + error.message)    
    });

}

   changeFormPage(page){
       console.log("This is from Tss "+ this.state.formPage);
       this.setState({prevFormPage:this.state.formPage,
                      formPage: this.state.formPage + page
                    }, () => {
                        console.log("This is the from Tss page is now: " +this.state.formPage);
                    });     
   }

   getRequiredPictures(){
      if (this.state.existingSolution.solarPanelsAvailable === "Yes"){
         this.setState({
            requiredPicttures: this.state.requiredPictures.push({img: "Solar Panels", 
                                                                  title: this.state.validInfo.siteId,
                                                                  author: `Latitude :${this.state.siteDetails.latitute}
                                                                           Longititute: ${this.state.siteDetails.longitute}`},
                                                                  {img: "Solar Junction Box", 
                                                                  title: this.state.validInfo.siteId,
                                                                  author: `Latitude :${this.state.siteDetails.latitute}
                                                                           Longititute: ${this.state.siteDetails.longitute}`})
                        })

      }
      if (this.state.existingSolution.batteryBankInstalled === "Yes"){
            this.setState({
                  requiredPicttures: this.state.requiredPictures.push({img: "Battery Bank Cells", 
                                                                        title: this.state.validInfo.siteId,
                                                                        author: `Latitude :${this.state.siteDetails.latitute}
                                                                                 Longititute: ${this.state.siteDetails.longitute}`},
                                                                        {img: "Closed Battery Cabinet", 
                                                                         title: this.state.validInfo.siteId,
                                                                         author: `Latitude :${this.state.siteDetails.latitute}
                                                                                  Longititute: ${this.state.siteDetails.longitute}`})
                        })
      }
      if (this.state.existingSolution.rectifierInstalled === "Yes"){
            this.setState({
                  requiredPicttures: this.state.requiredPictures.push({img: "Rectifier Modules", 
                                                                        title: this.state.validInfo.siteId,
                                                                        author: `Latitude :${this.state.siteDetails.latitute}
                                                                                 Longititute: ${this.state.siteDetails.longitute}`},
                                                                        {img: "Rectifier Racks", 
                                                                         title: this.state.validInfo.siteId,
                                                                         author: `Latitude :${this.state.siteDetails.latitute}
                                                                                  Longititute: ${this.state.siteDetails.longitute}`})
                        })
      }
      if (this.state.existingSolution.gridAvailable === "Yes"){
            this.setState({
                  requiredPicttures: this.state.requiredPictures.push({img: "Grid Power Source", 
                                                                        title: this.state.validInfo.siteId,
                                                                        author: `Latitude :${this.state.siteDetails.latitute}
                                                                                 Longititute: ${this.state.siteDetails.longitute}`})
                        })
      }

      this.setState({
         requiredPicttures: this.state.requiredPictures.push({img: "Genset", 
                                                               title: this.state.validInfo.siteId,
                                                               author: `Latitude :${this.state.siteDetails.latitute}
                                                                        Longititute: ${this.state.siteDetails.longitute}`},
                                                               {img: "Site Front View", 
                                                                title: this.state.validInfo.siteId,
                                                                author: `Latitude :${this.state.siteDetails.latitute}
                                                                         Longititute: ${this.state.siteDetails.longitute}`})
               })
   }
   
    render (){
      const form4CurrentState = {tenantLoads: this.state.tenantLoads,
                                 gensetDetails: this.state.gensetDetails,
                                 additionalLoad: this.state.additionalLoad,
                                 categorisedTenants: this.state.categorisedTenants}
    
    const style = {
        marginTop: "70px",
        marginLeft: "240px",
        
      };
      const {classes }= this.props
      const { open } = this.context
      

    return (
        <div>    
           <Main />
           <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
              })}
             >
             <div className={classes.drawerHeader} />
               
             <div style={style}>
              {this.state.formPage ===  0 && <TssValidForm 
                                              submitValidForm={this.submitValidForm} 
                                              changeFormPage={this.changeFormPage}/> }   
               {this.state.formPage === 1 && <TssForm1 
                                             submitForm1={this.submitForm1} 
                                             changeFormPage={this.changeFormPage}
                                             currentState= {this.state.siteDetails} 
                                             prevFormPage={this.state.prevFormPage}
                                             siteId={this.state.validInfo.siteId}/>}  
               {this.state.formPage === 2 && <TssForm2 
                                             submitForm2={this.submitForm2} 
                                             changeFormPage={this.changeFormPage}
                                             currentState= {this.state.cableRequirement }
                                             prevFormPage={this.state.prevFormPage} />}  
               {this.state.formPage === 3 && <TssForm3 
                                             submitForm3={this.submitForm3} 
                                             changeFormPage={this.changeFormPage}
                                             currentState= {this.state.existingSolution}
                                             prevFormPage={this.state.prevFormPage} />}   
               {this.state.formPage === 4 && <TssForm4 
                                             submitForm4={this.submitForm4} 
                                             changeFormPage={this.changeFormPage}
                                             currentState= {form4CurrentState}
                                             prevFormPage={this.state.prevFormPage} />}   
               {this.state.formPage === 5 && <TssForm5 
                                             submitForm5={this.submitForm5} 
                                             changeFormPage={this.changeFormPage}
                                             prevFormPage={this.state.prevFormPage}
                                             currentState= {this.state.images}
                                             requiredPictures={this.state.requiredPictures}/>}   
               {this.state.formPage === 6 && <TssPreviewPage
                                             siteDetails={this.state.siteDetails}
                                             existingSolution={this.state.existingSolution}
                                             categorisedTenants={this.state.categorisedTenants}
                                             gensetDetails={this.state.gensetDetails}
                                             additionalLoad={this.state.additionalLoad}
                                             cableRequirement={this.state.cableRequirement}
                                             submitPreviewPage={this.submitPreviewPage} 
                                             changeFormPage={this.changeFormPage}
                                             />}   
             </div>
           </main>
        </div>
      );

   }

}

export default withStyles(styles, { withTheme: true })(Tss);