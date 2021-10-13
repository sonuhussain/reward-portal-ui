import React from "react";

export default function AutoMechProdAuthReq() {
  return (
    <div>
      <div className="tab-header">
        <h4>Top 5 Request in Last 1 hour</h4>
        <a href="#">View all Requests</a>
      </div>
      <div className="table-my-act">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">REQUESTED ON</th>
              <th scope="col">NAME OF THE CONSUMER</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
              </td>
              <td>Sumathi Raja Goplan</td>
              <td>7100 4T 15W50 is a fully synthetic <br /> 4-strokeengine oil</td>
              <td>
                <button className="btn view-btn">Show code</button>
                <button className="btn view-btn decline-btn">Decline</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Sumathi Raja Goplan</td>
              <td>7100 4T 15W50 is a fully synthetic <br /> 4-strokeengine oil</td>
              <td>
                <button className="btn view-btn">Show code</button>
                <button className="btn view-btn decline-btn">Decline</button>
              </td>
            </tr>

            <tr>
              <td>
                <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
              </td>
              <td>Sumathi Raja Goplan</td>
              <td>7100 4T 15W50 is a fully synthetic <br /> 4-strokeengine oil</td>
              <td>
                <button className="btn view-btn">Show code</button>
                <button className="btn view-btn decline-btn">Decline</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Sumathi Raja Goplan</td>
              <td>7100 4T 15W50 is a fully synthetic <br /> 4-strokeengine oil</td>
              <td>
                <button className="btn view-btn">Show code</button>
                <button className="btn view-btn decline-btn">Decline</button>
              </td>
            </tr>

            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Sumathi Raja Goplan</td>
              <td>7100 4T 15W50 is a fully synthetic <br /> 4-strokeengine oil</td>
              <td>
                <button className="btn view-btn">Show code</button>
                <button className="btn view-btn decline-btn">Decline</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
