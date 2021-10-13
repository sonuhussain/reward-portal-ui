import React, { useState } from "react";
import FormImage2 from "./FormImage2";
import EditVehicles from "./EditVehicles";

export default function EditVehiclesDetails() {
  const [image, setImage] = useState("/image/VehiclesCar.svg");
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="col-md-6 no-gutters">
            <FormImage2 image={image} />
          </div>
          <div className="col-md-6 no-gutters">
            <EditVehicles />
          </div>
        </div>
      </div>
    </div>
  );
}
