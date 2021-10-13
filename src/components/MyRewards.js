import React from 'react'
import Navbar from './Navbar'
import SideNavbarTop from './SideNavbarTop'
import SideNavbarBottom from './SideNavbarBottom'
import HorizontalScroll from './landingPage/HorizontalScroll'

export default function MyRewards() {
    return (
                        <div className="c-dashboard container-fluid no-gutters p-0">
                        <Navbar />
                        <div className="c-dashboard-layout layout-nav-side">
                            <div className="c-dashboard-side-navbar">
                                <SideNavbarTop />
                                <SideNavbarBottom />
                            </div>
                            <div className="c-dashboard-content">
                            <div className="c-rewards-tabs">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#my-gift-cards">Gift Cards</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#redeem-history">Redeem History</a>
                            </li>
                        </ul>
                            <div class="tab-content">
                                <div class="tab-pane container p-0 active" id="my-gift-cards">
                                    <div className="gift-card-content">
                                        <div className="h-scrolling-tab">
                                            {/* <button className="btn s-tab-btn active ">All</button>
                                            <button className="btn s-tab-btn">Lifestyle</button>
                                            <button className="btn s-tab-btn">Travel</button>
                                            <button className="btn s-tab-btn">Education</button>
                                            <button className="btn s-tab-btn">Health & Fitness</button>
                                            <button className="btn s-tab-btn">Food</button> */}
                                            <HorizontalScroll />
                                        </div>
                                        <div className="gift-card-categories">
                                            <div className="row">
                                                <div className="col-md-4">
                                                <div class="card text-white">
                                                    <img class="card-img" src="https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="Card image" />
                                                    <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                        <h5 class="card-title">10 % off on Emirates Airlines</h5>
                                                        <p class="card-text">T& C Applied</p>
                                                        <div>
                                                            <button className="btn detail-btn">Details</button>
                                                            <button className="btn claim-btn">Claim Using 200 pts</button>
                                                        </div>
                                                     </div>   
                                                </div>
                                                </div>
                                                <div className="col-md-4">
                                                <div class="card text-white">
                                                    <img class="card-img" src="https://images.unsplash.com/photo-1623123093752-b59353db6a5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="Card image" />
                                                    <div class="card-img-overlay d-flex flex-column justify-content-end">
                                                        <h5 class="card-title">Half-Priced Frappuccinos</h5>
                                                        <p class="card-text">T& C Applied</p>
                                                        <div>
                                                            <button className="btn detail-btn">Details</button>
                                                            <button className="btn claim-btn">Claim Using 100 pts</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div class="card text-white">
                                                        <img class="card-img" src="https://images.unsplash.com/photo-1557183200-f0fec6612738?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" alt="Card image" />
                                                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                                                        <h5 class="card-title">After qualifying purchases plus our low intro APR for over one year</h5>
                                                            <p class="card-text">T& C Applied</p>
                                                            <div>
                                                                <button className="btn detail-btn">Details</button>
                                                                <button className="btn claim-btn">Claim Using 100 pts</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="row">
                                                <div className="col-md-4">
                                                    <div class="card text-white">
                                                        <img class="card-img" src="https://images.unsplash.com/photo-1555352660-d09491a69d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1556&q=80" alt="Card image" />
                                                        <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                        <h5 class="card-title">Discount Code and Get Up to 2 Free Nights.</h5>
                                                            <p class="card-text">T& C Applied</p>
                                                            <div>
                                                                <button className="btn detail-btn">Details</button>
                                                                <button className="btn claim-btn">Claim Using 100 pts</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane container p-0 fade" id="redeem-history">
                                    <div className="redeem-history-content">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Claimed On</th>
                                            <th scope="col">Gift card details</th>
                                            <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10-04-2021</td>
                                                <td>Starbucks Half-Priced Frappuccinos <div className="reward-valid-date">Valid till 31 May 2021</div></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>08-03-2021</td>
                                                <td>CITI Bank After qualifying purchases plus our low intro APR for over one year.<div className="reward-valid-date">Valid till 31 May 2021</div></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>10-04-2021</td>
                                                <td>Starbucks Half-Priced Frappuccinos <div className="reward-valid-date">Valid till 31 May 2021</div></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>10-04-2021</td>
                                                <td>Starbucks Half-Priced Frappuccinos <div className="reward-valid-date">Valid till 31 May 2021</div></td>
                                                <td></td>
                                            </tr>
                                            
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                                
                        </div>
                    </div>
        
    )
}
