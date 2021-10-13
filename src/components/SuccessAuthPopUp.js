import React from 'react'
import sucAuthImage from '../images/suc-auth-thumb.svg'

export default function SuccessAuthPopUp() {
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
                    <div className="modal-body">
                        <div className="succ-auth-txt">
                            <div className="suc-auth-thumb-img">
                                <img src={sucAuthImage} alt="_succ" />
                            </div>
                            <p className="succ-purchase-txt">Successfully, your Purchased <br /> Product has been Authenticated<br /> by the workshop</p>
                            <p className="succ-earn-pts-txt">You have Earn</p>
                            <h2>300 Pts</h2>
                            <div className="succ-btn-container">
                                <button type="button" className="btn verify-btn">OK</button>
                            </div>
                        </div>
                    </div> 
                
                </div>
            </div>
            </div>
        </div>
    )
}
