import React from "react";
import congratesImage from "../images/congrats-reward.svg";

export default function CongrateRewardPopUp() {
  return (
    <div>
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
        className="congarts-modal modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg " role="document">
          <div className="modal-content">
            <div className="modal-header">
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
              <div className="top-congrats-pop-up">
                <img className="card-img-top" src={congratesImage} alt="_img" />
                <div className="top-cong-txt">
                  <h2>Congratulations</h2>
                  <p>You have successfully claimed the offer</p>
                </div>
              </div>
              <div className="bottom-congrats-pop-up">
                <p className="popup-reward-details">
                  Emirates Airlines Upto 10% off on Base Fares
                </p>
                <h4>
                  Total Points used :&nbsp;<span>200</span>
                </h4>
                <ul>
                  <li>
                    Transaction id:&nbsp;<span>FKOD 526738333939</span>
                  </li>
                  <li>
                    Order Date:&nbsp;<span>26 Apr 2021</span>
                  </li>
                  <li>
                    Valid till:&nbsp;<span>30 Apr 2021</span>
                  </li>
                </ul>
                <div className="cong-offer-code-content">
                  <h4>Offer code</h4>
                  <div className="cong-offer-code">FLIPM23WP2</div>
                </div>
                <div className="cong-offer-details">
                  <h4>Offer Details:</h4>
                  <ul>
                    <li>Get up to 15% off on the base Fares.</li>
                    <li>Offer valid only for Emirates Airlines</li>
                    <li>Coupon code can be redeemed only once per user.</li>
                  </ul>
                </div>
                <div className="how-to-use">
                  <h4>How To Use</h4>
                  <ol>
                    <li>Login to Emirtaes airlines website</li>
                    <li>Book you air tickets.</li>
                    <li>Enter the offer code before checkout.</li>
                  </ol>
                </div>
                <hr />
                <a href="#">View Terms and Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
