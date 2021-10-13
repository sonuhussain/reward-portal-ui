import React from 'react' 
import Navbar from './Navbar'
import SideNavbarTop from './SideNavbarTop'
import SideNavbarBottom from './SideNavbarBottom'


export default function MyProfile() {
    return (
        <div className="c-dashboard container-fluid no-gutters p-0">
            <Navbar />
            <div className="c-dashboard-layout layout-nav-side">
                <div className="c-dashboard-side-navbar">
                    <SideNavbarTop />
                    <SideNavbarBottom />
                </div>
                <div className="c-dashboard-content">
                    <div className="dashboard-mdl-container">
                    <div className="card">
                        <div className="card-header">
                            Profile Details
                            <a href="#">Edit Details</a>
                        </div>
                        <div className="card-body">
                        <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td className="perview-form-l-txt">First Name :</td>
                            <td className="perview-form-r-txt">Dorothy</td>
                        </tr>
                        <tr>
                            <td  className="perview-form-l-txt">Last Name :</td>
                            <td className="perview-form-r-txt">Copland</td>
                        </tr>
                        <tr>
                            <td  className="perview-form-l-txt">Email Address :</td>
                            <td className="perview-form-r-txt">dorothy_p@gmail.com</td>
                        </tr>
                        <tr>
                            <td  className="perview-form-l-txt">Mobile Number :</td>
                            <td className="perview-form-r-txt">+1 276 358 3812</td>
                        </tr>
                        <tr>
                            <td  className="perview-form-l-txt">Set a Password :</td>
                            <td className="perview-form-r-txt">cafe@009</td>
                        </tr>
                        <tr>
                            <td  className="perview-form-l-txt">Confirm Set Password :</td>
                            <td  className="perview-form-r-txt">cafe@009</td>
                        </tr>
                        
                        
                    </tbody>
                    </table>
                        </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
