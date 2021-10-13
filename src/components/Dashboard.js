import React from 'react'
import Navbar from './Navbar'
import SideNavbarTop from './SideNavbarTop'
import SideNavbarBottom from './SideNavbarBottom'
import DashboardCarousel from './DashboardCarousel'
import DashboardTabs from './DashboardTabs'


export default function Dashboard() {
    return (
        <div className="c-dashboard container-fluid no-gutters p-0">
            <Navbar />
            <div className="c-dashboard-layout layout-nav-side">
                <div className="c-dashboard-side-navbar">
                    <SideNavbarTop />
                    <SideNavbarBottom />
                </div>
                <div className="c-dashboard-content">
                    <div className="c-dashboard-content-top">
                        <DashboardCarousel />
                    </div>
                    <div className="c-dashboard-content-bottom">
                        <DashboardTabs />
                    </div>
                </div>
            </div>
        </div>
    )
}
