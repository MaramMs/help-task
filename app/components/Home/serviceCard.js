"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/home.css";

function ServiceCard({ item }) {
  console.log(item, "item");

  return (
    <Card className="service-card">
      <Card.Header className="card-header">
        <img src={item.icon} />

        <h5 className="card-title">{item.title}</h5>
      </Card.Header>
      <Card.Body>
        <div className="service-title">
          Fake caption title
          <IoIosArrowForward />
        </div>

        <div className="service-title">
          Fake caption title
          <IoIosArrowForward />
        </div>

        <div className="service-title">
          Fake caption title
          <IoIosArrowForward />
        </div>

        <div className="service-title">
          Fake caption title
          <IoIosArrowForward />
        </div>

        <div className="service-title">
          Fake caption title
          <IoIosArrowForward />
        </div>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
