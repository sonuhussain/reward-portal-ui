import React from "react";

export default function AutoMechMyActivity() {
  return (
    <div>
      <div className="tab-header">
        <h4>Top 5 Activities in the Last 1 week</h4>
        <a href="#">View all Activies</a>
      </div>
      <div className="table-my-act">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">DATE & TIME</th>
              <th scope="col">ACTIVITY</th>
              <th scope="col">EARNE</th>
              <th scope="col">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
              </td>
              <td>Sign-up</td>
              <td>1000pts</td>
              <td>
                <button className="btn view-btn">View Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Product registration</td>
              <td>300pts</td>
              <td>
                <button className="btn view-btn">View Details</button>
              </td>
            </tr>

            <tr>
              <td>
                <span>27-05-2021</span> -- <span>10:45 am</span>{" "}
              </td>
              <td>Sign-up</td>
              <td>1000pts</td>
              <td>
                <button className="btn view-btn">View Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Product registration</td>
              <td>300pts</td>
              <td>
                <button className="btn view-btn">View Details</button>
              </td>
            </tr>

            <tr>
              <td>
                <span>27-05-2021</span> -- <span>9:45 am</span>
              </td>
              <td>Product registration</td>
              <td>300pts</td>
              <td>
                <button className="btn view-btn">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
