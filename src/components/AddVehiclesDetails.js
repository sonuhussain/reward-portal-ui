import React, { useState } from "react";
import FormImage2 from "./FormImage2";
import AddVehicles from "./AddVehicles";

export default function AddVehiclesDetails() {
  const [image, setImage] = useState("/image/VehiclesCar.svg");
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="col-md-6 no-gutters">
            <FormImage2 image={image} />
          </div>
          <div className="col-md-6 no-gutters">
            <AddVehicles />
          </div>
        </div>
      </div>
    </div>
  );
}
