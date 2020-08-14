import React, {Component} from "react";
import Webcam from "react-webcam";


   
  class WebcamCapture extends Component {
    constructor(props){
      super(props);
      this.state= {
        screenshot : null
      }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      const screenshot = this.webcam.getScreenshot();
      this.setState({screenshot});
      // let blob = new Blob(screenshot, { 'type' : 'img/jpg;' });
      let imgURL = window.URL.createObjectURL(screenshot);
      console.log(imgURL);
    }

    render(){

      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      console.log(this.state.screenshot)


      return (
        <> 
        {/* <iframe src="http://192.168.43.144:3000" allow="camera; microphone;"/> */}

          <Webcam
            audio={false}
            height={700}
            ref={node => this.webcam = node}
            screenshotFormat="image/jpeg"
            width={900}
            videoConstraints={videoConstraints}
          />
          
          <button onClick={this.handleClick}>Capture photo</button>
          {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
        </>
      );

    }

  };

  export default WebcamCapture;