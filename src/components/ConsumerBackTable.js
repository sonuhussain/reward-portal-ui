import React from "react";
import Navbar from "./Navbar";
import SideNavbarTop from "./SideNavbarTop";
import SideNavbarBottom from "./SideNavbarBottom";

export default function ConsumerBackTable() {
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
            <div className="table-dashboard-content">
              <div className="row d-flex justify-content-between back-arrow-btn-sign">
                <button className="btn back-btn">
                  <span className="btn-image"></span>
                  Back
                </button>
              </div>
              <div className="row activity-row-txt">
                <h5 className="all-act-txt">All Activies</h5>
                <h5 className="num-row-txt">
                  No.of Rows &nbsp;
                  <select>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                  </select>
                </h5>
              </div>
              <div className="c-dashboard-tabs">
                {/* <!-- Tab panes --> */}
                <div class="tab-content">
                  <div class="tab-pane container p-0 active" id="my-activities">
                    <div className="table-my-act">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Date & time</th>
                            <th scope="col">Activity</th>
                            <th scope="col">Earned</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                            </td>
                            <td>Sign-up</td>
                            <td>1000pts</td>
                            <td>
                              <button className="btn view-btn">
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>27-05-2021</span> -- <span>9:45 am</span>
                            </td>
                            <td>Product registration</td>
                            <td>300pts</td>
                            <td>
                              <button className="btn view-btn">
                                View Details
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                            </td>
                            <td>Sign-up</td>
                            <td>1000pts</td>
                            <td>
                              <button className="btn view-btn">
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span>27-05-2021</span> -- <span>9:45 am</span>
                            </td>
                            <td>Product registration</td>
                            <td>300pts</td>
                            <td>
                              <button className="btn view-btn">
                                View Details
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span>27-05-2021</span> -- <span>9:45 am</span>
                            </td>
                            <td>Product registration</td>
                            <td>300pts</td>
                            <td>
                              <button className="btn view-btn">
                                View Details
                              </button>
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
      </div>
    </div>
  );
}
