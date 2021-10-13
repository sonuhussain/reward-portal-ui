import React from "react";

function ConsumerDetails() {
  return (
    <div className="right-side-form">
      <form>
        <h1 className="form-title">Consumer Deatils</h1>
        <p className="form-sub-title">Step 1: Please Enter Basic Details</p>
        <div className="row mb-4">
          <div className="col-md-12">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="(Eg) johndeo425@gmail.com"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="(Eg) 953458 0208"
            />
          </div>
        </div>

        <div className="form_btn login-form-details">
          <button type="submit" class="btn can-btn">
            Cancel
          </button>
          <button type="submit" class="btn per-btn ml-3">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConsumerDetails;
