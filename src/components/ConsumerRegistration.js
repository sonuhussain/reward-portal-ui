import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import FormImage from "./FormImage";

export default function ConsumerRegistration() {
  const [image, setImage] = useState("image/consumer-form-register.svg");
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="col-md-5 no-gutters">
            <FormImage image={image} />
          </div>
          <div className="col-md-7 no-gutters">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
