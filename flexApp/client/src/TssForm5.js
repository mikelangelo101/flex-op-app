import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import uuid from "uuid/v4";
import ImageList from "./ImageList";
import EnlargeImage from "./EnlargeImage";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



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
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      backgroundColor: "#069c40",
      "&:hover" :{
        backgroundColor: "#1ae067",
       }
    }
  });



class TssForm5 extends Component {
  static defaultProps = {
 
  }
    constructor(props){
        super(props);
        this.state = {
          images: [],
          imageClick: "",
          showEnlargeImage: false
        }
        this.submitForm5 = this.submitForm5.bind(this)
        this.goPrevious = this.goPrevious.bind(this)
        this.enlargeImage = this.enlargeImage.bind(this)
        this.closeImage = this.closeImage.bind(this)
        this.removeImage = this.removeImage.bind(this)
    }

    componentDidMount(){
      if (this.props.prevFormPage === 6) {
          this.setState({
            tenantLoads:this.props.currentState.tenantLoads,
          })
      }
  }


    onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let itemImage = event.target.getAttribute('data-item');
        console.log(JSON.stringify(itemImage));
        let reader = new FileReader();
        reader.onload = (e) => {
          console.log(e.target.result);
          this.setState({
            images: [...this.state.images, 
                       {img: e.target.result,
                         title: itemImage, 
                         author: "",
                         id: uuid()}
                    ]
          });
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }
    
    enlargeImage(id){
        this.setState({
          imageClick: this.state.images.filter(img => img.id === id),
          showEnlargeImage: true
        })
    }
    closeImage(){
      this.setState({
        showEnlargeImage: false
      })
    }
    removeImage(id){
      this.setState({
        images: this.state.images.filter(image => image.id !== id)
      });
    }

    submitForm5(evt){
        evt.preventDefault();
        this.props.submitForm5(this.state.images);
        console.log("Data from TSSForm5 Submit")
        this.props.changeFormPage(1);
       }
    
       goPrevious(){
        this.props.changeFormPage(-1);
      }

 
    
   
    render() { 
        const { classes } = this.props;
        const {requiredPictures} = this.props;
        const pictures = requiredPictures.map((item) => {
          if (!this.state.showEnlargeImage){
            return (
                  <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>
                  <IconButton aria-label="filter list"
                              id="group_image">
                      <AddAPhotoIcon />
                      
                         <Typography variant="h6"> {item.img}</Typography>
                      
                  
                  <input type="file" 
                         onChange={this.onImageChange} 
                         className="Image"
                         id="group_image"
                         data-item={item.img}/>
                  </IconButton>
                  </Paper>
                  </Grid>
              )
          }
        })


        return ( 
            <Container >
            {!this.state.showEnlargeImage && <ImageList tileData={this.state.images}
                                              enlargeImage={this.enlargeImage}
                                              removeImage={this.removeImage}/>}
            {this.state.showEnlargeImage && <EnlargeImage img={this.state.imageClick} closeImage={this.closeImage}/> }
            <Divider style={{marginTop: "30px", marginBottom:"30px"}}/>
             <Grid container spacing={3}>
              {pictures}
             </Grid>
             <Divider style={{marginTop: "30px", marginBottom:"30px"}}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {!this.state.showEnlargeImage && <Button
               variant='contained'
               type='submit'
               style={{width: "35%"}}
               color='primary'
               className={classes.submit}
               onClick={this.submitForm5}
              >
               Submit/Next
             </Button>}
             {!this.state.showEnlargeImage && <Divider style={{marginTop: "20px", marginBottom:"20px"}}/>}
             {!this.state.showEnlargeImage && <Button
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
 
export default withStyles(styles,{ withTheme: true })(TssForm5);