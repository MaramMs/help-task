"use client";
import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";

const AccordionCustom = () => {
  const [activeKey, setActiveKey] = useState("1");

  const accordionItems = [
    {
      id: 1,
      header: "Setting up the store for the first time",
    },
    {
      id: 2,
      header: "Catalogue",
    },
    {
      id: 3,
      header: "orders",
    },

    {
      id: 4,
      header: "customers",
    },
  ];

  const handleToggle = (key) => {
    console.log(key ,'key');
    
    setActiveKey(activeKey === key ? null : key);
  };
  console.log(activeKey, 'active');
  
  return (
    <Accordion defaultActiveKey="1" 
    activeKey={activeKey}
    onSelect={handleToggle}
    className="border-none">
    {accordionItems.map((accordion) => (
      <Accordion.Item eventKey={accordion.id.toString()} key={accordion.id}>
        <Accordion.Header>
        <span className="flex justify-between items-center w-full text-[#170F49] text-[14px] md:text-[18px]">
              {accordion.header}
              <span className="ml-2">
                {activeKey === accordion.id.toString() ? "-" : "+"}
              </span>
            </span>
        </Accordion.Header>
        <Accordion.Body className="flex flex-col gap-4">
          <Button className="bg-[#F7F7FB] rounded-[16px] py-[10px] border-none text-left pl-[61px] w-full text-[#170F49] text-[14px]">
            Create a store
          </Button>
          <p className="text-[#170F49] text-[14px] ml-[34px]">Store Setting</p>
          <p className="text-[#170F49] text-[14px] ml-[34px]">
            Add the first product
          </p>
        </Accordion.Body>
        <hr className="bg-[#D9DBE9]" />
      </Accordion.Item>
    ))}
  </Accordion>
  );
};

export default AccordionCustom;
