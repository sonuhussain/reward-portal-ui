import React from 'react'

function EditAutomobileRegistration() {
    return (
        
        <div className="right-side-form">
             <form className="edit-profile-form automob-edit-profile">
                <h1 className="form-title">Edit Basic Details</h1>
                <label htmlFor="name">I'm a</label>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <input type="radio" name="touch" checked /><span className="ml-1 mr-3 rem-txt">Repair Shop Owner</span>
                        <input type="radio" name="touch" /><span className="ml-1 mr-3 rem-txt">Service center</span>
                        <input type="radio" name="touch" /><span className="ml-1 mr-3 rem-txt">Mechanic</span>
                    </div>
                </div>
                <label htmlFor="name">Choose your Vendor</label>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <input type="radio" name="toucher" /><span className="ml-1 mr-3 rem-txt">Distributor</span>
                        <input type="radio" name="toucher" checked /><span className="ml-1 mr-3 rem-txt">Retailer</span>
                    </div>
                </div>
                <label htmlFor="name">Search For your Vendor Deatils</label>
                <textarea 
                            type="text" 
                            className="form-control basic-detail-place-value" 
                            id="name"
                            value="E.S Motor Oil Retailer, 2489 Shady Pines Drive ,Rocky Mount, VA 24151"
                            //placeholder="E.S Motor Oil Retailer, 2489 Shady Pines Drive ,Rocky Mount, VA 24151"
                        />
                <div className="form_btn">
                    <button type="submit" class="btn can-btn">Cancel</button>
                    <button type="submit" class="btn per-btn ml-3">Save</button>
                </div>
            </form>
        </div>
        
    )
}

export default EditAutomobileRegistration;