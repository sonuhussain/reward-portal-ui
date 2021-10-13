import React from "react";

export default function ProductAuthenPopUp() {
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
        className="re-details-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header pro-auth-header">
              <h2>Product Authentication</h2>
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
              <div className="product-pop-up-input-box">
                <textarea
                  type="text"
                  placeholder="Enter reason for declining the request"
                  className="form-control"
                />
              </div>
              <div className="sub-btn-container">
                <button type="button" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
