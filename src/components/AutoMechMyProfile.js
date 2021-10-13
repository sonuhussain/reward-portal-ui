import React from "react";
import AutoMechNavbar from "./AutoMechNavbar";
import AutoMechSideNavbarTop from "./AutoMechSideNavbarTop";
import AutoMechSideNavbarBottom from "./AutoMechSideNavbarBottom";

export default function AutoMechMyProfile() {
  return (
    <div className="c-dashboard container-fluid no-gutters p-0">
      <AutoMechNavbar />
      <div className="c-dashboard-layout layout-nav-side">
        <div className="c-dashboard-side-navbar">
          <AutoMechSideNavbarTop />
          <AutoMechSideNavbarBottom />
        </div>
        <div className="c-dashboard-content">
          <div className="dashboard-mdl-container dashboard-profile-container ">
            <div className="card">
              <div className="card-header card-right card-top-header">
                Basic Details
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <tbody className="table-stripe-color">
                    <tr>
                      <td className="perview-form-l-txt">I'm a :</td>
                      <td className="perview-form-r-txt">Repair shop owner</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">My vendor :</td>
                      <td className="perview-form-r-txt">Retailer</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">Vendor Address :</td>
                      <td className="perview-form-r-txt">
                        E.S Motor Oil Retailer 2489 Shady Pines Drive Rocky
                        Mount, VA 24151
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div></div>
              <div className="card">
              <div className="card-header">
                Profile Details
                <a href="#">Edit Details</a>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <tbody className="table-stripe-color">
                    <tr>
                      <td className="perview-form-l-txt">First Name :</td>
                      <td className="perview-form-r-txt">Robert E</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">Last Name :</td>
                      <td className="perview-form-r-txt">Farmer</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">Email Address :</td>
                      <td className="perview-form-r-txt">
                      Robert_e456@jourapride.com
                      </td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">Mobile Number :</td>
                      <td className="perview-form-r-txt">+1 276 358 3812</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">Set a Password :</td>
                      <td className="perview-form-r-txt">pride@9606</td>
                    </tr>
                    <tr>
                      <td className="perview-form-l-txt">
                        Confirm Set Password :
                      </td>
                      <td className="perview-form-r-txt">pride@9606</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
