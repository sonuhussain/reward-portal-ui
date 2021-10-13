import React from 'react'

function EditProfileAutomobile() {
    return (
        
        <div className="right-side-form">
             <form className="edit-profile-form automob-edit-profile">
                <h1 className="form-title">Edit Profile Details</h1>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="name">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name"
                            placeholder=""
                            value="Robert E"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastname">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastname" 
                            placeholder=""
                            value="Farmer"
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        placeholder=""
                        value="Robert_e456@jourapride.com"
                    />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="mobile" 
                        placeholder=""
                        value="+1 276 358 3812"
                    />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                    <label htmlFor="password">Set a Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="password"
                        placeholder=""
                        value="pride@9606"
                    />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="lastname">Confirm Set Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastname" 
                        placeholder=""
                        value="pride@9606"
                    />
                    </div>
                </div>
                <div className="form_btn form-save-div-btn">
                    <button type="submit" class="btn can-btn save-btn">Cancel</button>
                    <button type="submit" class="btn per-btn save-btn ml-3">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfileAutomobile;