import React from 'react'

export default function RewardsDetailsPopUp() {
    return (
        <div>
           {/*  <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch modal
</button>

{/* <!-- Modal --> */}
<div className="re-details-modal modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content reward-modal-content">
      <div className="modal-header">
      <h3>Rewards Details</h3>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
        <div className="re-details-content">
          <p >10 % off on Emirates Airlines</p>
          <h4 >Details :</h4>
          <ul>
            <li>Get up to 15% off on the base fares</li>
            <li>Offer valid only for Emirates Airlines</li>
            <li>Coupon code can be redeemed only once per user.</li>
          </ul>
          </div>
        
        <div className="btn-container">
            <button type="button" className="btn claim-pts-btn">Claim using 200 pts</button>
        </div>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
