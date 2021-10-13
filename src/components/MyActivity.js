import React from "react";

export default function MyActivity() {
  return (
    <div>
      <div className="tab-header">
        <h4>Top 5 Activities from in your Last Login</h4>
        <a href="#">View all Activities</a>
      </div>
      <div className="table-my-act">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date & time</th>
              <th scope="col">Activity</th>
              <th scope="col">Earned</th>
              <th scope="col">Actions</th>
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
