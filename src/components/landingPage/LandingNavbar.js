import React from "react";

export default function LandingNavbar() {

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("Sticky", window.scrollY > 0);
  });
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
      <div className="container">
        <div className="brand-navbar-txt">
          <a className="navbar-brand" href="#">
            <h2 className="m-0">Certify Loyalty</h2>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register Now
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu-01
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu-02
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
    
  );
}
