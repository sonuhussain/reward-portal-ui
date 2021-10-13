import React from "react";

function AutomobileRegistration() {
  return (
    <div className="right-side-form">
      <div className="top-form-link">
        <a href="#">Already have a Account?</a>
      </div>
      <form>
        <h1 className="form-title">Register as Automobile repair shop</h1>
        <p className="form-sub-title">Step 1: Please Enter Basic Details</p>
        <label htmlFor="name">I'm a</label>
        <div className="row mb-4">
          <div className="col-md-12">
            <input type="radio" />
            <span className="ml-1 mr-3 rem-txt">Repair Shop Owner</span>
            <input type="radio" />
            <span className="ml-1 mr-3 rem-txt">Service center</span>
            <input type="radio" />
            <span className="ml-1 mr-3 rem-txt">Mechanic</span>
          </div>
        </div>
        <label htmlFor="name">Choose your Vendor</label>
        <div className="row mb-4">
          <div className="col-md-12">
            <input type="radio" />
            <span className="ml-1 mr-3 rem-txt">Distributor</span>
            <input type="radio" />
            <span className="ml-1 mr-3 rem-txt">Retailer</span>
          </div>
        </div>
        <label htmlFor="name">Search For your Vendor Deatils</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Type first three character of the vendor name"
        />
        <div className="form_btn">
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

export default AutomobileRegistration;
