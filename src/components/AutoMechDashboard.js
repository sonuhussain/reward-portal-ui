import React from "react";
import AutoMechNavbar from "./AutoMechNavbar";
import DashboardCarousel from "./DashboardCarousel";
import AutoMechSideNavbarTop from "./AutoMechSideNavbarTop";
import AutoMechSideNavbarBottom from "./AutoMechSideNavbarBottom";
import AutoMechDashboardTabs from "./AutoMechDashboardTabs";

export default function AutoMechDashboard() {
  return (
    <div className="c-dashboard container-fluid no-gutters p-0">
      <AutoMechNavbar />
      <div className="c-dashboard-layout layout-nav-side">
        <div className="c-dashboard-side-navbar">
          <AutoMechSideNavbarTop />
          <AutoMechSideNavbarBottom />
        </div>
        <div className="c-dashboard-content">
          <div className="c-dashboard-content-top">
            <DashboardCarousel />
          </div>
          <div className="c-dashboard-content-bottom">
            <AutoMechDashboardTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
