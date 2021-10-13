import React from "react";
import IntroVideo from "./IntroVideo";
import LandFooter from "./LandFooter";
import LandingCarousel from "./LandingCarousel";
import LandingNavbar from "./LandingNavbar";
import LandRegNow from "./LandRegNow";
import PromotionOffers from "./PromotionOffers";
import RewardBenefits from "./RewardBenefits";

export default function LandingPage() {
  return (
    <div>
      <div className="wrapper">
        <div className="container-fluid p-0">
          <div className="hero-banner">
            <div className="top-nav">
              <LandingNavbar />
            </div>
            <LandingCarousel />
          </div>
        </div>
        <IntroVideo />
        <RewardBenefits />
        <LandRegNow />
        <PromotionOffers />
        <LandFooter />
      </div>
    </div>
  );
}
