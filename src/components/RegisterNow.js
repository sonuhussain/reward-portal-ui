import React from "react";

export default function RegisterNow() {
  return (
    <div className=" container-fluid f-center">
      <div className="container">
        <div className="reg-now-content">
          <div className="row d-flex justify-content-between">
            <button className="btn home-btn">
              <span className="btn-image"></span>Home
            </button>

            <div className="top-reg-link mr-4">
              <a href="#">Already have a Account?</a>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
              <div class="card card-left-image">
                <img
                  class="card-img-top"
                  src="/image/consumer-form-register.svg"
                  alt="Card image cap"
                />
                <div class="card-footer card-l">
                  <a href="#" class="btn">
                    Register as Consumer
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <img
                  class="card-img-top"
                  src="/image/automobile-register.svg"
                  alt="Card image cap"
                />
                <div class="card-footer card-r">
                  <a href="#" class="btn">
                    Register as Automobile repair shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
