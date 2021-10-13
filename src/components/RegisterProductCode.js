import React from 'react' 
import Navbar from './Navbar'
import SideNavbarTop from './SideNavbarTop'
import SideNavbarBottom from './SideNavbarBottom'


export default function RegisterProductCode() {
    return (
        <div className="c-dashboard container-fluid no-gutters p-0">
            <Navbar />
            <div className="c-dashboard-layout layout-nav-side">
                <div className="c-dashboard-side-navbar">
                    <SideNavbarTop />
                    <SideNavbarBottom />
                </div>
                <div className="c-dashboard-content">
                    <div className="dashboard-mdl-container">
                        <div className="register-product-container">
                            <h2>Turn Your Purchase into Rewards</h2>
                            <p>Enter Your Purchase details to redeem exclusive offers and services today</p>
                            <form>
                                    <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="name">Shopcode</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name"
                                            placeholder="(Eg) AZ-7009-HYD"
                                        />
                                    </div>
                                    </div>                                    
                                    <div className="row mb-4">
                                    <div className="col-md-8">
                                        <label htmlFor="name">Vehicle Registration Plate Number</label>
                                        <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="name">Mileage</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name"
                                            placeholder="(Eg) 1029 KM"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="name">12-digit Product Code</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name"
                                            placeholder="(Eg) 8696 0689 6789"
                                        />
                                    </div>
                                </div> 
                                <div className="d-flex justify-content-end mt-5">
                                    <button type="submit" class="btn can-btn">Reset</button>
                                    <button type="submit" class="btn per-btn ml-3">Submit</button>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
