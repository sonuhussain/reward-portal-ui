import React from 'react'

export default function PopUp() {
    return (
        <div>
           {/*  <!-- Button trigger modal --> */}
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div className="verify-modal modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h2>Account verification</h2>
        <h3>Please Verify Account</h3>
        <p>Enter the 4 digit code we sent to your <br /> Mobile number&nbsp; 
            <span className="mob-num">982XXXX5670</span>
        </p>
        <div className="code-box">
            <div className="code-item">
                <input 
                    type="text" 
                    placeholder="0" 
                    className="form-control" 
                    maxlength="1" 
                    autofocus="" 
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                />
            </div>
            <div className="code-item">
                <input 
                    type="text" 
                    placeholder="0" 
                    className="form-control" 
                    maxlength="1" 
                    autofocus="" 
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                />
            </div>
            <div className="code-item">
                <input 
                    type="text" 
                    placeholder="0" 
                    className="form-control" 
                    maxlength="1" 
                    autofocus="" 
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                />
            </div>
            <div className="code-item">
                <input 
                    type="text" 
                    placeholder="0" 
                    className="form-control" 
                    maxlength="1" 
                    autofocus="" 
                    oninput="this.value=this.value.replace(/[^0-9]/g,'');"
                />
            </div>
        </div>
        <div className="btn-container">
            <button type="button" className="btn verify-btn">Verify & Continue</button>
        </div>
        <p className="pop-up-err-msg">Your have enter invalid code,try <br /> again or click Resend link below</p>
        <div className="resend-text">
            <p className="mt-3">Didn't got the code? <a href="#">RESEND CODE</a></p>
        </div>
      </div>
      
    </div>
  </div>
</div>
        </div>
    )
}
