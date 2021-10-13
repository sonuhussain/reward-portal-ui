import React from "react";

export default function AutomobileRegistrationPreview() {
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="auto-pre-container">
            <h1 className="form-title">Register as Automobile repair shop</h1>
            <p className="form-sub-title">Step 3: Preview & Confirm</p>
            <div className="auto-pre-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="auto-per-basic-details">
                    <div className="card">
                      <div className="card-header card-left">
                        Your Basic Details
                        <a href="#">Edit Details</a>
                      </div>
                      <div className="card-body">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td className="perview-form-l-txt">I'm a :</td>
                              <td className="perview-form-r-txt">
                                Repair shop owner
                              </td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                My vendor :
                              </td>
                              <td className="perview-form-r-txt">Retailer</td>
                            </tr>
                            <tr className="last-row-left-side">
                              <td className="perview-form-l-txt">
                                Vendor Address :
                              </td>
                              <td className="perview-form-r-txt">
                                E.S Motor Oil Retailer 2489 Shady Pines Drive
                                Rocky Mount, VA 24151
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="auto-per-profile-details">
                    <div className="card">
                      <div className="card-header card-right">
                        Profile Details
                        <a href="#">Edit Details</a>
                      </div>
                      <div className="card-body">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td className="perview-form-l-txt">
                                First Name :
                              </td>
                              <td className="perview-form-r-txt">Dorothy</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Last Name :
                              </td>
                              <td className="perview-form-r-txt">Copland</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Email Address :
                              </td>
                              <td className="perview-form-r-txt">
                                dorothy_p@gmail.com
                              </td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Mobile Number :
                              </td>
                              <td className="perview-form-r-txt">
                                +1 276 358 3812
                              </td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Set a Password :
                              </td>
                              <td className="perview-form-r-txt">cafe@009</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Confirm Set Password :
                              </td>
                              <td className="perview-form-r-txt">cafe@009</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="auto-confirm-btn mt-4 d-flex justify-content-end">
                      <button type="submit" className="btn per-btn ml-3">
                        Confirm
                      </button>
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
