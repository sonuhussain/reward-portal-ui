import React from "react";

function AutomobileRegistration2() {
  return (
    <div className="right-side-form">
      <form className="auto-reg-repair">
        <h1 className="form-title">Register as Automobile repair shop</h1>
        <p className="form-sub-title">
          Step 2: Please Enter Your Profile Details
        </p>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="(Eg) John"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="(Eg) Deo"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="(Eg) johndeo425@gmail.com"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="(Eg) 953458 0208"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="password">Set a Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Must have at least 6 characters"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Confirm Set Password</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Re-enter the Set password"
            />
          </div>
        </div>
        <div className="form_btn">
          <button type="submit" className="btn can-btn">
            Back
          </button>
          <button type="submit" className="btn per-btn ml-3">
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}

export default AutomobileRegistration2;
