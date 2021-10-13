import React from "react";
export default function IntroVideo() {
  function introvideo() {
    var fullvideoscreen = document.querySelector(".full-video-screen");
    var video = document.querySelector("video");
    fullvideoscreen.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
  }
  return (
    <div>
      <div className="intro-video-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1625259112043-5993cf8da2a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                alt=""
              />
              <button className="btn video-play-button" onClick={introvideo}>
                <a id="play-video" class="video-play-button" href="#">
                  {" "}
                  <span></span>
                </a>
              </button>
              <div class="full-video-screen">
                <video
                  src="https://ak.picdn.net/shutterstock/videos/1025738153/preview/stock-footage-in-technology-research-facility-female-project-manager-talks-with-chief-engineer-they-consult.webm"
                  type="video/mp4"
                  controls="true"
                ></video>

                <button
                  type="button"
                  class="btn close-video"
                  onClick={introvideo}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
