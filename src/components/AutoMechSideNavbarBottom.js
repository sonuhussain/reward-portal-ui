import React from "react";

export default function AutoMechSideNavbarBottom() {
  return (
    <div>
      <div className="add-consu-btn">
        <button className="btn p-0">
          <span className="add-btn-txt m-1 nav-plus-Link nav-d-letter ">+</span>
          <span className="add-consu-txt">Add Consumer details</span>
        </button>
      </div>

      <div className="side-navbar-bottom">
        <a href="#" class="active">
          Over View
        </a>
        <a href="#">My Profile</a>
        <a href="#">My Consumers</a>
        <a href="#">My Rewards</a>
      </div>
    </div>
  );
}
