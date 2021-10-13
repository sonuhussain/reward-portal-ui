import React from "react";
import oilBottleImg from "../images/oil-bottle.svg";
export default function ProductAuthVerificationPopUp() {
  return (
    <div>
      {/*  <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="verify-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h2 className="product-auth-ver-header">
                Product Authentication
              </h2>
              <div className="oil-bottle-img">
                <img src={oilBottleImg} alt="_oil_pic" />
              </div>
              <div className="product-ver-txt">
                <h5>Get the code from the vendor</h5>
                <p>
                  Enter the 4 digit code we sent to your <br /> Vendor's Mobile
                  app
                </p>
              </div>
              <div className="code-box-auth-ver">
                <div className="code-item">
                  <input
                    type="text"
                    placeholder="0"
                    className="form-control"
                    maxlength="1"
                    autofocus=""
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                  />
                </div>
                <div className="code-item">
                  <input
                    type="text"
                    placeholder="0"
                    className="form-control"
                    maxlength="1"
                    autofocus=""
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                  />
                </div>
                <div className="code-item">
                  <input
                    type="text"
                    placeholder="0"
                    className="form-control"
                    maxlength="1"
                    autofocus=""
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                  />
                </div>
                <div className="code-item">
                  <input
                    type="text"
                    placeholder="0"
                    className="form-control"
                    maxlength="1"
                    autofocus=""
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                  />
                </div>
              </div>
              <div className="product-ver-btn-container">
                <button type="button" className="btn verify-btn">
                  Verify & Continue
                </button>
              </div>
              <div className="resend-text resend-auth-text">
                <p className="mt-3">
                  Didn't got the code? <a href="#" className="resend-code-txt">RESEND CODE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
