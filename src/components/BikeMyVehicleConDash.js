import React from "react";
import Navbar from "./Navbar";
import SideNavbarTop from "./SideNavbarTop";
import SideNavbarBottom from "./SideNavbarBottom";
import BikeVehicleLogo from "../images/bikelogo.svg";

export default function BikeMyVehicleConDash() {
  return (
    <div>
      <div className="c-dashboard container-fluid no-gutters p-0">
        <Navbar />
        <div className="c-dashboard-layout layout-nav-side">
          <div className="c-dashboard-side-navbar">
            <SideNavbarTop />
            <SideNavbarBottom />
          </div>
          <div className="c-dashboard-content">
            <div className="c-dashboard-content-bottom">
              <div className="back-arrow-btn-div back-arrow-btn-sign">
                <button className="btn back-btn">
                  <span className="btn-image"></span>
                  Back
                </button>
              </div>
              <div className="col-6 align-self-center">
                <h5 className="all-act-txt">All Vehicles</h5>
              </div>
              <div class="container bg-danger bike-middle-content">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
