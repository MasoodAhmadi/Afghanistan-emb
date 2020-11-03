import React from "react";
import Icon1 from "../../utill/images/1.jpg";

import "../../App.css";
class Pagination extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
            <div class="col-sm-4" style={{ backgroundColor: "" }}>
              <img src={Icon1} alt="Mountains" width="300" height="300" />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default Pagination;
