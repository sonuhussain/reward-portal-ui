import React from "react";

export default function ProductAuthenCodePopUp() {
  return (
    <div>
      {/*  <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="re-details-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content reward-modal-content">
            <div className="modal-header">
              <div className="pro-auth-code-header">
                <h3>Product Authentication</h3>
              </div>
            </div>
            <div className="product-auth-code-txt">
              <h4>Four Digit Code</h4>
              <h2>8986</h2>
              <p>
                Show this code to your <br /> consumer " Sumathi Raja Gopalan"
              </p>

              <div className="product-btn-container">
                <button type="button" className="btn verify-btn">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
