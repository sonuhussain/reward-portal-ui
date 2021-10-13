import React from "react";
import AutoMechNavbar from "./AutoMechNavbar";
import AutoMechSideNavbarTop from "./AutoMechSideNavbarTop";
import AutoMechSideNavbarBottom from "./AutoMechSideNavbarBottom";

export default function AutoMechBackTable() {
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
              <button className="btn back-btn">
                <span className="btn-image"></span>
                Back
              </button>
            </div>
            <div className="row activity-row-txt">
              <h5 className="all-act-txt">Product Authentication Request</h5>
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
              <div className="tab-content">
                <div className="tab-pane container p-0 active" id="my-activities">
                  <div className="table-my-act">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Requested on</th>
                          <th scope="col">Name of the Conusmer</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Authentication Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                          </td>
                          <td>Sumathi Raja Goplan</td>
                          <td>
                            7100 4T 15W50 is a fully <br /> synthetic
                            4-strokeengine oil
                          </td>
                          <td className="done-auth-status">Done</td>
                          <td>
                            <button className="btn view-btn">Show code</button>
                            <button className="btn view-btn decline-btn">
                              Decline
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                          </td>
                          <td>Sumathi Raja Goplan</td>
                          <td>
                            7100 4T 15W50 is a fully <br /> synthetic
                            4-strokeengine oil
                          </td>
                          <td className="decline-auth-status">Pending</td>
                          <td>
                            <button className="btn view-btn">Show code</button>
                            <button className="btn view-btn decline-btn">
                              Decline
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                          </td>
                          <td>Sumathi Raja Goplan</td>
                          <td>
                            7100 4T 15W50 is a fully <br /> synthetic
                            4-strokeengine oil
                          </td>
                          <td className="done-auth-status">Done</td>
                          <td>
                            <button className="btn view-btn">Show code</button>
                            <button className="btn view-btn decline-btn">
                              Decline
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
                          </td>
                          <td>Sumathi Raja Goplan</td>
                          <td>
                            7100 4T 15W50 is a fully <br /> synthetic
                            4-strokeengine oil
                          </td>
                          <td className="done-auth-status">Done</td>
                          <td>
                            <button className="btn view-btn">Show code</button>
                            <button className="btn view-btn decline-btn">
                              Decline
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
