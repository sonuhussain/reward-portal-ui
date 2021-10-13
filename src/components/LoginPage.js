import React from 'react'

export default function LoginPage() {
    return (
        <div className="form-bg container-fluid f-center">
            <div className="triangle_container"></div>
            <div className="circle_container"></div>
            <div className="container">
                <div className="row">
                    <button className="btn home-btn"><span className="btn-image"></span>Home</button>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="form-container login-form">
                            <h2>Certify <span className="loyal-txt">Loyalty</span> </h2>
                            <h5>Welcome to Reward Portal</h5>
                            <div className="login-form-container">
                            <div className="row mb-4">
                            <div className="col-md-12">
                                <label htmlFor="name">User Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name"
                                    placeholder="Enter your user name"
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password"
                                    placeholder="••••••••••"
                                />
                            </div>  
                        </div>
                        <div className="row md-4">
                            <div className="col-md-6">
                            <input type="radio" /><span className="ml-2 rem-txt">Remember me</span>
                            </div>
                            <div className="col-md-6 forgot-txt">
                               <a href="#">Forgot password?</a> 
                            </div>
                        </div>
                        <div className="login-btn-container">
                            <button className="btn login-btn">Log in</button>
                        </div>
                        <div className="reg-link">
                            <p>Don't have an account Yet?</p>
                            <a href="#">Register for an Account Now</a>
                        </div>
                    </div>
                    
                </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}
