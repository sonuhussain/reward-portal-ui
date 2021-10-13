import React from "react";

function EditVehicles() {
  return (
    <div className="right-side-form">
      <form>
        <h1 className="form-title mb-4 mt-3">Edit Vehicle Details</h1>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name">Vehicle Registration Number</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value="WB 00969 B"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Vehicle category</label>
            <select className="form-control">
              <option>Two Wheeler</option>
              <option>Four Wheeler</option>
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
              value="Yamaha"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="model">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              id="model"
              value="FZS-FI Dark"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="password">Year of Manfacture</label>
            <select className="form-control">
              <option>2019</option>
              <option>2018</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname">Vehicle mileage (KM)</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value="657587"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="password">Vehicle Usage</label>
            <select className="form-control">
              <option>Personal</option>
              <option>Commercial</option>
            </select>
          </div>
        </div>
        <div className="form_btn">
          <button type="submit" class="btn can-btn">
          Cancel
          </button>
          <button type="submit" class="btn per-btn ml-3">
          Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditVehicles;
