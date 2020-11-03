import React from "react";
///import { Container, Row, Col, Image } from "react-bootstrap";
//import { Image1 } from "../../images/CRM.png";
import Pagination from "../06_Gallery/Gallery.component";
class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="header_fix">
        <div>
          <Pagination />
        </div>
      </div>
    );
  }
}
export default FirstPage;
