import React from "react";

export default function LandFooter() {
  return (
    <div className="term-con-footer">
      <div className="container-fluid p-0">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link foot-cond-txt" href="#">
                  Terms & Conditions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link foot-cond-txt" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link foot-cond-txt" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <span class="navbar-text">Copyright © Certified Loyalty</span>
          </div>
        </nav>
      </div>
    </div>
    </div>
  );
}
