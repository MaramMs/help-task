"use";
import React from "react";
import ServiceCard from "./serviceCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCard from "./mainCard";
function ServicesCards() {
  const cardItem = [
    {
      title: "Catalogue",
      icon: "/images/icons/Widget.svg",
    },
    { title: "orders", icon: "/images/icons/order.svg" },
    {
      title: "customers",
      icon: "/images/icons/Users Group Rounded.svg",
    },
    {
      title: "Catalogue",
      icon: "/images/icons/Widget.svg",
    },
    { title: "orders", icon: "/images/icons/order.svg" },
    {
      title: "customers",
      icon: "/images/icons/Users Group Rounded.svg",
    },
    {
      title: "Catalogue",
      icon: "/images/icons/Widget.svg",
    },
    { title: "orders", icon: "/images/icons/order.svg" },
    {
      title: "customers",
      icon: "/images/icons/Users Group Rounded.svg",
    },
  ];
  return (
    <Container>
    <Row>
      {cardItem.map((item, index) => (
        <Col key={index} xs={12} lg={4}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default ServicesCards;
