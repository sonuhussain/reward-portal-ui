import React from "react";
import imagetop from "../images/left-bottom-auto.svg";
import imagebottom from "../images/right-bottom-auto.svg";

function Image(props) {
  return (
    <div className="left-form-bg">
      <div className="form-imagecenter2">
        <img src={props.image} className="rounded mx-auto d-block" alt="icon" />
      </div>
      <div className="form-image-bottom-lf">
        <img src={imagebottom} alt="icon" />
      </div>
      <div className="form-image-bottom-rf">
        <img src={imagetop} alt="icon" />
      </div>
    </div>
  );
}

export default Image;
