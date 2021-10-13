import React, { useState } from "react";
import FormImage from "./FormImage";
import ConsumerDetails from "./ConsumerDetails";

export default function ConsumerDetailsLogin() {
  const [image, setImage] = useState("image/consumer-form-register.svg");
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="col-md-6 no-gutters">
            <FormImage image={image} />
          </div>
          <div className="col-md-6 no-gutters">
            <ConsumerDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
