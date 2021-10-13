import React from "react";
// import yelloGlnImg from "../../images/landingImages/yellow-gln.png";

export default function PromotionOffers() {
  return (
    <div className="prom-offer-content">
      <div className="container">
        <h1>Promotions & Offers</h1>
        <div className="promo-carousel">
          <div
            id="carouselSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
          >
            <ul class="carousel-indicators">
              <li
                data-target="#carouselSlidesOnly"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselSlidesOnly" data-slide-to="1"></li>
            </ul>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row mr-0">
                  <div className="col-md-4">
                    <div className="promo-slider-01">
                      <img
                        src="https://images.unsplash.com/photo-1471782517485-c81d26d8572c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="promo-slider-02">
                      <img
                        src="https://images.unsplash.com/photo-1471782517485-c81d26d8572c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="promo-slider-03">
                      <img
                        src="https://images.unsplash.com/photo-1471782517485-c81d26d8572c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row mr-0">
                  <div className="col-md-4">
                    <div className="promo-slider-04">
                      <img
                        src="https://images.unsplash.com/photo-1471782517485-c81d26d8572c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="promo-slider-05">
                      <img
                        src="https://images.unsplash.com/photo-1549369131-489306191c8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="promo-slider-06">
                      <img
                        src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
                        alt=""
                      />
                    </div>
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
