import React, { Component } from 'react';
import Button from "@material-ui/core/Button";



class EnlargeImage extends Component {
  
    render() { 

        return (
            <div style={{
                width: "100%"
            }}>  
            <img style={{width: "100%"}} src={this.props.img[0].img} alt={this.props.img[0].id}/>
             <Button
               variant='contained'
               type='close'
               style={{width: "80px"}}
               color='primary'
               onClick={ () => this.props.closeImage()}
              >
                  Close
            </Button>
            </div>
          );
    }
}
 
export default EnlargeImage;