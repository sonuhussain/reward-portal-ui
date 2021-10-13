import React from "react";
import AutoMechMyActivity from "./AutoMechMyActivity";
import AutoMechProdAuthReq from "./AutoMechProdAuthReq";

export default function AutoMechDashboardTabs() {
  return (
    <div>
      <div className="c-dashboard-tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#my-activities">
              Product Authentication Request
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#service-vehicles">
              My Activites
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          <div className="tab-pane container p-0 active" id="my-activities">
            <AutoMechProdAuthReq />
          </div>
          <div className="tab-pane container p-0 fade" id="service-vehicles">
            <AutoMechMyActivity />
          </div>
        </div>
      </div>
    </div>
  );
}
