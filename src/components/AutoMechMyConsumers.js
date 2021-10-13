import React from "react";
import AutoMechNavbar from "./AutoMechNavbar";
import AutoMechSideNavbarTop from "./AutoMechSideNavbarTop";
import AutoMechSideNavbarBottom from "./AutoMechSideNavbarBottom";

export default function AutoMechMyConsumers() {
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
              <div className="row mt-4">
                <div className="col-6 align-self-center">
                  <h5 className="all-act-txt">
                    <img
                      src="https://img.icons8.com/ios/50/000000/upload--v1.png"
                      className="upload-icon-img"
                    />
                    &nbsp;&nbsp;Export Consumer
                  </h5>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <h5 className="num-row-txt ml-2">
                    No.of Rows &nbsp;
                    <select>
                      <option>20</option>
                      <option>30</option>
                      <option>40</option>
                    </select>
                  </h5>
                </div>
              </div>

              <div className="c-dashboard-tabs">
                {/* <!-- Tab panes --> */}

                <div className="table-my-act">
                  <table class="table table-striped">
                    <thead>
                      <tr className="top-head-styling">
                        <th scope="col">Consumer Name</th>
                        <th scope="col">Vehicle Number</th>
                        <th scope="col">Service</th>
                        <th scope="col">Product Used</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ana E Holzman</td>
                        <td>WB 8579 D</td>
                        <td>09/26/2020</td>
                        <td>Helix HX5 SN 15W40 (4L)</td>
                        <td className="dot-styling dropleft">
                          <button
                            type="button"
                            class="btn"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-left">
                            <button class="dropdown-item" type="button">
                              View Details
                            </button>
                            <button class="dropdown-item" type="button">
                              Add another Vehicle
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Scott F Norman</td>
                        <td>Scott F Norman</td>
                        <td>09/26/2020</td>
                        <td>Helix HX5 SN 15W40 (4L)</td>
                        <td className="dot-styling dropleft">
                        <button
                            type="button"
                            class="btn"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-h"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-left">
                            <button class="dropdown-item" type="button">
                              View Details
                            </button>
                            <button class="dropdown-item" type="button">
                              Add another Vehicle
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
