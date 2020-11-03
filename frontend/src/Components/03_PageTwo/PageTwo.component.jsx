import React, { Component } from "react";
import Icon1 from "../../utill/images/1.jpg";

import "./style.css";

class SecondPage extends Component {
  render() {
    return (
      <div class="center">
        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src={Icon1} alt="Cinque Terre" width="400" height="300" />
            </a>
            <div class="desc">
              hinta: <span>10€</span>
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={Icon1} alt="Forest" width="400" height="300" />
            </a>
            <div class="desc">
              {" "}
              hinta: <span>10€</span>
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src={Icon1} alt="Northern Lights" width="400" height="300" />
            </a>
            <div class="desc">
              {" "}
              hinta: <span>10€</span>
            </div>
          </div>
        </div>

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src={Icon1} alt="Mountains" width="400" height="300" />
            </a>
            <div class="desc">
              {" "}
              hinta: <span>10€</span>
            </div>
          </div>
        </div>

        <div class="clearfix"></div>
        <br />
        <br />
        <div>
          <p>
            products are fron standard company with license selling with finnish
            authority papers.
          </p>
          <p>to write more here</p>
        </div>
      </div>
    );
  }
}
export default SecondPage;
