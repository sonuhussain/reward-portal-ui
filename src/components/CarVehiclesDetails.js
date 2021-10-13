import React from "react";
import VehicleImg from "../images/cons-car-imoji.svg";

export default function CarVehiclesDetails() {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-md-7">
          <div className="row mt-5">
            <div className="col-md-4 vehicles-car-image">
              <img src={VehicleImg} alt="" />
            </div>
            <div className="col-md-8 vehicles-honda-txt">
              <h2>HONDA</h2>
              <h4>WB 8579 D</h4>
              <h5>
                Helix Engine Warranty Status:<b> N/A</b>
              </h5>
              <p>
                Engine Oil Validy: <span>06/26/2021</span>
              </p>
              <p>
                Last Service Date: <span>09/26/2020</span>
              </p>
              <p>
                Product Used: <span>Helix HX5 SN 15W40 (4L)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="r-vehicles-part">
            <h4>Last Service Workshop :</h4>
            <h3>The Honda Pride service center</h3>
            <hr />
            <p className="vehicle-right-lbl-txt">
              Vehicle Registration Plate Number
            </p>
            <p className="vehicle-right-val-txt">WB 8579 D</p>
            <hr />
            <p className="vehicle-right-lbl-txt">Vehicle Brand</p>
            <p className="vehicle-right-val-txt">HONDA</p>
            <hr />
            <p className="vehicle-right-lbl-txt">Vehicle Model</p>
            <p className="vehicle-right-val-txt">WR-V-Facelift</p>
            <hr />
            <p className="vehicle-right-lbl-txt">Year of Manfacture</p>
            <p className="vehicle-right-val-txt">2019</p>
            <hr />
            <p className="vehicle-right-lbl-txt">Vehicle Usage</p>
            <p className="vehicle-right-val-txt">Personal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
