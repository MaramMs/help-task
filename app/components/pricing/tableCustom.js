import React from "react";
import { Button, Form, Table } from "react-bootstrap";

function TableCustom() {
  const rows = [
    {
      label: "price",
      free: "$0",
      basic: "$14.08/mo",
      bronze: "$14.08/mo",
      gold: "$14.08/mo",

    },
    {
      label: "products Number",
      free: "100",
      basic: "100",
      bronze: "200",
      gold: "Unlimited",
    },
    {
      label: "Number of Categories",
      free: "100",
      basic: "100",
      bronze: "200",
      gold: "Unlimited",
    },
    {
      label: "Easy online store to launch your business for free",
      free: <Form.Check aria-label="option 1" />,
      basic: <Form.Check aria-label="option 1" />,
      bronze: <Form.Check aria-label="option 1" />,
      gold: <Form.Check aria-label="option 1" />,
    },
    {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for freeEasy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
      {
        label: "Everything in Venture plus",
        free: <Form.Check aria-label="option 1" />,
        basic: <Form.Check aria-label="option 1" />,
        bronze: <Form.Check aria-label="option 1" />,
        gold: <Form.Check aria-label="option 1" />,
      },
  ];
  return (
    <div className="table-responsive-sm">
    <Table striped>
      <thead style={{ backgroundColor: '#F9F9FB' }}>
        <tr className="bg-[#1A1A1A]">
          <th></th>
          <th>Free</th>
          <th>Basic</th>
          <th>Bronze</th>
          <th>Gold</th>
        
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr
            key={index}
          >
            <td>{row.label}</td>
            <td>{row.free}</td>
            <td>{row.basic}</td>
            <td>{row.bronze}</td>
            <td>{row.gold}</td>
         
          </tr>
        ))}
      </tbody>

         
         <tfoot>
        <tr>
          <td></td> 
          <td><Button variant="success" className="w-100 md:py-[10px] md:px-[16px]">Get Started</Button></td>
          <td><Button variant="outline-primary" className="w-100 md:py-[10px] md:px-[16px]">Get Started</Button></td>
          <td><Button variant="outline-warning" className="w-100 md:py-[10px] md:px-[16px]">Get Started</Button></td>
          <td><Button variant="outline-danger" className="w-100 md:py-[10px] md:px-[16px]">Get Started</Button></td>
        </tr>
      </tfoot>
    
    </Table>

    </div>
  );
}

export default TableCustom;
