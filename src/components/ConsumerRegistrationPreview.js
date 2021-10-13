import React from "react";
import ConsumerPreview from "./ConsumerPreview";
import FormImagePre from "../images/consumer-form-preview-2.svg";

export default function ConsumerRegistrationPreview() {
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="col-md-5 no-gutters">
            <div className="left-pre-form-bg">
              <div className="form-pre-image form-image">
                <img src={FormImagePre} alt="_icon" />
              </div>
            </div>
          </div>
          <div className="col-md-7 no-gutters">
            <ConsumerPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
