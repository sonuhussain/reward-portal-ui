import React from "react";
import sadImage from "../images/sad-emoji.svg";
export default function ErrorMobOrEmailPopUp() {
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
        className="error-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="sad-imoji">
                <img src={sadImage} alt="_img" />
              </div>
              <p className="s-incorrect-otp">
              Sorry this Mobile number or email id is <br /> not registered with reward portal
              </p>
              <p className="cost-to-reward-txt text-center">Please tell your Customers to <br /> register with Reward portal</p>
              <div className="trying-container-btn">
                <button className="btn trying-btn">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
