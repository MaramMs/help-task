import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import { IoLogoTwitter } from "react-icons/io5";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer pt-[60px] pb-[85px]">
      <Container>
        <div className="flex flex-col  justify-center items-center pb-[100px]">
          <img
            src="/images/footer-logo.png"
            alt="Footer Logo"
            className="footer-img "
          />
          <p className="footer-des w-sm-[100%] w-md-[43%] ">
            One platform to sell, ship, and market for your products on the web,
            on social media channels, and through a mobile app, with tons of
            built-in features, apps, tools, and services.
          </p>
          <Row
            className="list d-flex justify-content-between align-items-center w-100"
            style={{ maxWidth: 325 }}
          >
            <Col xs="auto">FAQs</Col>
            <Col xs="auto">Help</Col>
            <Col xs="auto">Contact us</Col>
          </Row>
        </div>
        <hr className="line" />

        <Row className="d-flex justify-content-between align-items-center mt-3 flex-column flex-md-row">
          <Col xs="auto" className="text-center text-md-start">
            <p className="footer-copy mb-2 mb-md-0">
              All rights reserved to Konin Cloud © 2024
            </p>
          </Col>
          <Col xs="auto" className="d-flex justify-content-center">
            <div className="d-flex">
              <div className="social-item me-3">
                <RiFacebookFill className="text-white" />
              </div>
              <div className="social-item me-3">
                <FaInstagram className="text-white" />
              </div>
              <div className="social-item">
                <IoLogoTwitter className="text-white" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
