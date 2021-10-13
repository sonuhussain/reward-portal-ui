import React from "react";
import MyActivity from "./MyActivity";
import MyServices from "./MyServices";

export default function DashboardTabs() {
  return (
    <div>
      <div className="c-dashboard-tabs">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#my-activities">
              My Activities
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#service-vehicles">
              My Serviced Vehicle(s)
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div class="tab-content">
          <div class="tab-pane container p-0 active" id="my-activities">
            <MyActivity />
          </div>
          <div class="tab-pane container p-0 fade" id="service-vehicles">
            <MyServices />
          </div>
        </div>
      </div>
    </div>
  );
}
