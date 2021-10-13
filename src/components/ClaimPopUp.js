import React from "react";

export default function ClaimPopUp() {
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
        className="claim-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="claim-content">
                <h5>Claim Rewards</h5>
                <p>
                  You are about to use <span className="purple-c">200pts</span>{" "}
                  .Are you
                  <br />
                  sure you want to continue
                </p>
                <div className="c-btn-container">
                  <button className="btn">Cancel</button>
                  <button className="btn">Yes, Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
