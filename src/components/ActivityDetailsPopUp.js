import React from "react";

export default function ActivityDetailsPopUp() {
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
              <h4 className="activity-detail-header">Activity Details</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="activity-dtl-txt">
              <h5>ACTIVITY</h5>
              <h2>Sign-up</h2>
              <h3>Details:</h3>
              <p>
                DATE & TIME :&nbsp; <span>27-05-2021</span> --&nbsp;
                <span>10:45 am.</span>
              </p>
              <p>
                EARNED : <span>1000pts</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
