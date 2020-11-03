import React from "react";
//import Card from "react-bootstrap/Card";
//import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Icon1 from "../../utill/images/1.jpg";

class Footer extends React.Component {
  render() {
    return (
      /*   <Card
        style={{
          width: "100rem",
          marginTop: "11%",
          zIndex: "1",
          position: "fixed",
          height: "40%",
          background: "#000000",
        }}
      >
        <Card.Body>
          <Card.Title>TimeTable</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Auki</Card.Subtitle>
          <Card.Text>
            <p>AP 10.00-19.00</p>
            <p>LA 10.00 -17.00</p>
            <p>SU 10.00 -17.00</p>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card> */
      <div
        style={{
          width: "100%",
          marginTop: "16%",
          zIndex: "1",
          position: "static",
          height: "30%",
          background: "#000000",
        }}
      >
        <Container class="center">
          <Row>
            <Col>
              <h3>aukioloajat</h3>
              <p>AP 10.00-19.00</p>
              <p>LA 10.00 -17.00</p>
              <p>SU 10.00 -17.00</p>
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Col>

            <Col></Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;

/* import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Cardi = styled.footer`
  width: 100%;
  margin-top: 24.2%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0;
  height: 100px;
  background: #000000;

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; 
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <div className="logo">
        <Cardi>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-1">
              <footer className="blockquote-footer">Someone famous in</footer>
            </blockquote>
          </Card.Body>
        </Cardi>
      </div>
    );
  }
}
export default Footer;
 */
