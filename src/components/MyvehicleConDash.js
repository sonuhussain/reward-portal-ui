import React from "react";
import Navbar from "./Navbar";
import SideNavbarTop from "./SideNavbarTop";
import SideNavbarBottom from "./SideNavbarBottom";
import CarVehiclesDetails from "./CarVehiclesDetails";
import BikeVehiclesDetails from "./BikeVehiclesDetails";

export default function MyVehicleConDash() {
  return (
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
          </div>

          <div className="vehicles-carousel m-3">
            <div
              id="demo"
              class="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              {/* <!-- Indicators --> */}
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
              </ul>

              {/* <!-- The slideshow --> */}
              <div class="carousel-inner carousel-inner-part">
                <div class="carousel-item active">
                  <CarVehiclesDetails />
                </div>
                <div class="carousel-item ">
                  <BikeVehiclesDetails />
                </div>
              </div>

              {/* <!-- Left and right controls --> */}
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
