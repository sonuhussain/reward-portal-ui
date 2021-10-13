import React from "react";

export default function ConsumerDetailsPreview() {
  return (
    <div className="form-bg container-fluid f-center">
      <div className="container">
        <div className="form-container row no-gutters">
          <div className="auto-pre-container">
            <h1 className="form-title">Your Consumer Details</h1>
            <p className="form-sub-title">Step 3 : Preview & Confirm</p>
            <div className="auto-pre-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="auto-per-basic-details">
                    <div className="card">
                      <div className="card-header card-left card-left-header">
                        Consumer Basic Details
                      </div>
                      <div className="card-body">
                        <table className="table table-striped ">
                          <tbody className="table-stripe-color">
                            <tr>
                              <td className="perview-form-l-txt">
                                First Name :
                              </td>
                              <td className="perview-form-r-txt">Robert E</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Last Name :
                              </td>
                              <td className="perview-form-r-txt">Farmer</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Email Address :
                              </td>
                              <td className="perview-form-r-txt">
                                Robert_e456@jourapride.com
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
                              <td className="perview-form-l-txt">&nbsp;</td>
                              <td className="perview-form-r-txt">&nbsp;</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">&nbsp;</td>
                              <td className="perview-form-r-txt">&nbsp;</td>
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
                      <div className="card-header card-right card-right-header">
                        Vehicle Details
                        <a href="#">Edit Details</a>
                      </div>
                      <div className="card-body">
                        <table className="table table-striped">
                          <tbody className="table-stripe-color">
                            <tr>
                              <td className="perview-form-l-txt vehicles-reg-place-txt">
                                Vehicle Registration Plate Number :
                              </td>
                              <td className="perview-form-r-txt">WB 00969 B</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Vehicle Brand:
                              </td>
                              <td className="perview-form-r-txt">Yamaha</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Vehicle Model :
                              </td>
                              <td className="perview-form-r-txt">
                                FZS-FI Dark
                              </td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Year of Manufacture :
                              </td>
                              <td className="perview-form-r-txt">2019</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Vehicle Usage
                              </td>
                              <td className="perview-form-r-txt">Personal</td>
                            </tr>
                            <tr>
                              <td className="perview-form-l-txt">
                                Vehicle category
                              </td>
                              <td className="perview-form-r-txt">
                                Two Wheeler
                              </td>
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
