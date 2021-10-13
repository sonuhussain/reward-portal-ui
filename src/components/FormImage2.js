import React from "react";
import imagetop from '../images/top-curve-img.svg'
import imagebottom from '../images/bottom-curve-img.svg'

function Image(props) {
  return (
    <div className="left-form-bg">
      <div className="form-imagetop">
        <img src={imagebottom} alt="icon" />
      </div>
      <div className="form-imagecenter">
        <img src={props.image} alt="icon" />
      </div>
      <div className="form-imagebottom">
        <img src={imagetop} alt="icon" />
      </div>
    </div>
  );
}

export default Image;
