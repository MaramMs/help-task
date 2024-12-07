import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import '../../styles/pricing/tablecustom.css'
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
      free: <Form.Check checked aria-label="option 1" />,
      basic: <Form.Check checked aria-label="option 1" />,
      bronze: <Form.Check checked aria-label="option 1" />,
      gold: <Form.Check checked aria-label="option 1" />,
    },
    {
        label: "Easy online store to launch your business for free",
        free: <Form.Check checked aria-label="option 1" />,
        basic: <Form.Check checked aria-label="option 1" />,
        bronze: <Form.Check checked  aria-label="option 1" />,
        gold: <Form.Check checked aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for free",
        free: <Form.Check checked aria-label="option 1" />,
        basic: <Form.Check checked aria-label="option 1" />,
        bronze: <Form.Check checked aria-label="option 1" />,
        gold: <Form.Check checked aria-label="option 1" />,
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
        free: <Form.Check checked aria-label="option 1" />,
        basic: <Form.Check checked aria-label="option 1" />,
        bronze: <Form.Check checked aria-label="option 1" />,
        gold: <Form.Check checked aria-label="option 1" />,
      },
      {
        label: "Easy online store to launch your business for freeEasy online store to launch your business for free",
        free: <Form.Check checked aria-label="option 1" />,
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
        free: <Form.Check checked className="checked-red" aria-label="option 1" />,
        basic: <Form.Check checked aria-label="option 1" />,
        bronze: <Form.Check checked aria-label="option 1" />,
        gold: <Form.Check checked aria-label="option 1" />,
      },
  ];
  return (
    <div className="table-responsive">
    <Table striped >
      <thead style={{ backgroundColor: '#F9F9FB' }}>
        <tr >
          <th></th>
          <th className="text-[#1A1A1A] text-[18px] font-medium">Free</th>
          <th className="text-[#1A1A1A] text-[18px] font-medium">Basic</th>
          <th className="text-[#1A1A1A] text-[18px] font-medium">Bronze</th>
          <th className="text-[#1A1A1A] text-[18px] font-medium">Gold</th>
        </tr>
      </thead>
  
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
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
          <td>
            <Button variant="success" className="w-100 py-2 px-3">
              Get Started
            </Button>
          </td>
          <td>
            <Button variant="outline-primary" className="w-100 py-2 px-3">
              Get Started
            </Button>
          </td>
          <td>
            <Button variant="outline-warning" className="w-100 py-2 px-3">
              Get Started
            </Button>
          </td>
          <td>
            <Button variant="outline-danger" className="w-100 py-2 px-3">
              Get Started
            </Button>
          </td>
        </tr>
      </tfoot>
    </Table>
  </div>
  
  );
}

export default TableCustom;
