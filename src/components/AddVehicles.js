import React from "react";

function AddVehicles() {
  return (
    <div className="right-side-form">
      <form>
        <h1 className="form-title">Add Vehicle Details</h1>
        <p className="form-sub-title">
          Step 2 : Please Provide Your Consumer Vehicle Details
        </p>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name">Vehicle Registration Number</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="(Eg) AX-10-474849"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Vehicle category</label>
            <select className="form-control">
              <option>Select Vehicle Category</option>
              <option>Saab</option>
              <option>Opel</option>
              <option>Audi</option>
            </select>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="brand">Vehicle Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              placeholder="(Eg) BMW"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="model">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              placeholder="(Eg) 5 series"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="password">Year of Manfacture</label>
            <select className="form-control">
              <option>Select the year</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Vehicle mileage (KM)</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Vehicle mileage (KM)"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="password">Vehicle Usage</label>
            <select className="form-control">
              <option>Select the Vehicle Usage</option>
              <option>Personal</option>
              <option>Commercial</option>
            </select>
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

export default AddVehicles;
