import React from "react";
import AutoMechNavbar from "./AutoMechNavbar";
import AutoMechSideNavbarTop from "./AutoMechSideNavbarTop";
import AutoMechSideNavbarBottom from "./AutoMechSideNavbarBottom";
import CarVehiclesDetails from "./CarVehiclesDetails";
import BikeVehiclesDetails from "./BikeVehiclesDetails";

export default function AutoMechAllConsumerData() {
  return (
    <div className="c-dashboard container-fluid no-gutters p-0">
      <AutoMechNavbar />
      <div className="c-dashboard-layout layout-nav-side">
        <div className="c-dashboard-side-navbar">
          <AutoMechSideNavbarTop />
          <AutoMechSideNavbarBottom />
        </div>
        <div className="c-dashboard-content">
          <div className="c-dashboard-content-bottom">
            <div className="table-dashboard-content">
              <div className="row d-flex justify-content-between back-arrow-btn-sign">
                <button className="btn back-btn ml-3">
                  <span className="btn-image"></span>
                  All Consumers
                </button>
              </div>
              <div className="row no-gutters ml-3">
                <div className="col-md-9">
                  <div className="con-details-bg mt-4">
                    <div className="row no-gutters">
                      <div className="col-md-3 rt-border">
                        <label>Consumer Name</label>
                        <h5>Ana E Holzman</h5>
                      </div>
                      <div className="col-md-3 text-center rt-border">
                        <label>Total Vehicles</label>
                        <h5>02</h5>
                      </div>
                      <div className="col-md-3 text-center rt-border">
                        <label>Four Wheelers</label>
                        <h5>01</h5>
                      </div>
                      <div className="col-md-3 text-center">
                        <label>Two Wheelers</label>
                        <h5>01</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mt-4">
                  <div className="con-add-btn">
                    <button className="btn">Add another Vehicles</button>
                  </div>
                </div>
              </div>
              <div className="vehicles-carousel mt-2 ml-3">
                <div
                  id="demo"
                  class="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  {/* <!-- Indicators --> */}
                  <ul class="carousel-indicators">
                    <li
                      data-target="#demo"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                  </ul>

                  {/* <!-- The slideshow --> */}
                  <div class="carousel-inner carousel-inner-part">
                    <div className="edit-details-top-link">
                      <a href="#">Edit Details</a>
                    </div>
                    <div class="carousel-item active">
                      <CarVehiclesDetails />
                    </div>
                    <div class="carousel-item ">
                      <BikeVehiclesDetails />
                    </div>
                  </div>

                  {/* <!-- Left and right controls --> */}
                  <a
                    class="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
