import React from "react";
import diamondImg from "../../images/landingImages/diamond.svg";
import giftImg from "../../images/landingImages/gift.svg";
import calenderImg from "../../images/landingImages/calendar.png";
import geniusImg from "../../images/landingImages/genius-product.png";
import thumbImg from "../../images/landingImages/thumbImg.svg";
import BonusImg from "../../images/landingImages/bonus.png";
export default function RewardBenefits() {
  return (
    <div className="rew-ben-content">
      <div className="container">
        <div className="masonry-ben-grid">
          <h1>Enjoy These Benefits</h1>
          <div className="masonry-grid-container no-gutters">
            <div class="container">
              <div class="card-columns">
                <div class="card earn-pts-card mb-5">
                  <div class="card-body">
                    <div className="card-icon-img">
                      <img src={diamondImg} alt="" />
                    </div>
                    <h3 className="mason-card-title">
                      Easy Redemption of Points
                    </h3>
                    <p className="mason-card-txt">
                      Just 3 easy steps to <br /> redeem!!!
                    </p>
                  </div>
                </div>
                <div class="card oil-rem-card">
                  <div class="card-body">
                    <div className="card-icon-img">
                      <img src={calenderImg} alt="" />
                    </div>
                    <h3 className="mason-card-title">Oil Change Reminders</h3>
                    <p className="mason-card-txt">Never miss an oil change</p>
                  </div>
                </div>
                <div class="card promo-card mb-5">
                  <div class="card-body">
                    <div className="card-icon-img">
                      <img src={giftImg} alt="" />
                    </div>
                    <h3 className="mason-card-title">Seasonal Promotions</h3>
                    <p className="mason-card-txt mb-5">Enjoy seasonal promotions</p>
                  </div>
                </div>
                <div class="card bonus-card">
                  <div class="card-body">
                    <div className="card-icon-img">
                      <img src={BonusImg} alt="" />
                    </div>
                    <h3 className="mason-card-title">Instant Sign-up Bonus</h3>
                    <p className="mason-card-txt">
                      Earns points on your sign-up
                    </p>
                  </div>
                </div>
                <div class="card gen-pro-card mb-5">
                  <div class="card-body">
                    <div className="genius-icon-img">
                      <img src={geniusImg} alt="" />
                    </div>
                    <h3 className="mason-card-title">
                      Genuine Product Assurance
                    </h3>
                    <p className="mason-card-txt">
                      Get an SMS confirmation <br /> upon purchased quality
                    </p>
                  </div>
                </div>
                <div class="card discount-card">
                  <div class="card-body">
                    <div className="card-icon-img">
                      <img src={thumbImg} alt="" />
                    </div>

                    <h3 className="mason-card-title">Enjoy discount on Oils</h3>
                    <p className="mason-card-txt">
                      Regular Oils Expenses
                      <br /> More Rewards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
