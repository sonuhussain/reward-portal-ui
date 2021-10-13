import React from "react";
import mobImg from "../../images/landingImages/mobileImg.svg";
export default function LandingCarousel() {
  return (
    <div>
      <div className="container">
        <div className="banner-carousel">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <div className="land-l-txt">
                      <h2>Convert your Engine oil into rewards</h2>
                    </div>
                    <div className="get-start-btn">
                      <button>Get Started</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="land-right-img">
                      <img src={mobImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <div className="land-l-txt">
                      <h2>02.Convert your Engine oil into rewards</h2>
                    </div>
                    <div className="get-start-btn">
                      <button>Get Started</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="land-right-img">
                      <img src={mobImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://images.unsplash.com/photo-1602826949307-2eead9fcfdb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80"
                  alt="Third slide"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
