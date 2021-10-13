import React from "react";

function FormImage(props) {
  return (
    <div className="left-form-bg">
      <div className="form-image">
        <img src={props.image} alt="icon" />
      </div>
    </div>
  );
}

export default FormImage;
