"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";
import "../../styles/home.css";
import Link from "next/link";

function ServiceCard({ item }) {
  console.log(item, "item");

  return (
    <Card className="service-card">
      <Card.Header className="card-header">
        <img src={item.icon} />

        <h5 className="card-title">{item.title}</h5>
      </Card.Header>
      <Card.Body>
     <div className="d-flex flex-col gap-[30px]">
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
     </div>

     <div>
      <Link href='/' className="card-link">
       See all 11
       <IoIosArrowForward className="text-['#405189']"/>

      </Link>
     </div>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
