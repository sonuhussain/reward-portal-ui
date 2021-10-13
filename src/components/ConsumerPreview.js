import React from "react";

function ConsumerPreview() {
  return (
    <div className="right-side-form">
      <form className="mt-4">
        <h1 className="form-title">Register as Consumer</h1>
        <p className="form-sub-title">
          Step 2: Preview & Confirm Your Profile Details
        </p>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td className="perview-form-l-txt">First Name :</td>
              <td className="perview-form-r-txt">Dorothy</td>
            </tr>
            <tr>
              <td className="perview-form-l-txt">Last Name :</td>
              <td className="perview-form-r-txt">Copland</td>
            </tr>
            <tr>
              <td className="perview-form-l-txt">Email Address :</td>
              <td className="perview-form-r-txt">dorothy_p@gmail.com</td>
            </tr>
            <tr>
              <td className="perview-form-l-txt">Mobile Number :</td>
              <td className="perview-form-r-txt">+1 276 358 3812</td>
            </tr>
            <tr>
              <td className="perview-form-l-txt">Set a Password :</td>
              <td className="perview-form-r-txt">cafe@009</td>
            </tr>
            <tr>
              <td className="perview-form-l-txt">Confirm Set Password :</td>
              <td className="perview-form-r-txt">cafe@009</td>
            </tr>
          </tbody>
        </table>
        <div className="form_btn">
          <button type="submit" className="btn can-btn">
            Edit
          </button>
          <button type="submit" className="btn per-btn ml-3">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConsumerPreview;
