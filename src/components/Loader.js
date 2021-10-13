import React from "react";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div class="overlay active">
        <div className="full-screen-loader">
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
          <div className="loader-otp-txt mt-5 col-md-12">
            <h4>Waiting for OTP verification</h4>
          </div>
        </div>
      </div>
    );
  }
}
