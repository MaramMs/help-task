'use client'
import React from 'react'
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { IoSearch } from "react-icons/io5"; // Importing the search ico
import '../../styles/home.css'
export default function Search() {
    const handleSearch = (event) => {
        event.preventDefault();
        // Add your search logic here
        console.log("Search triggered");
      };
  return (
    <Form className="d-flex justify-center mt-3 search" onSubmit={handleSearch}>
    <InputGroup>
      <FormControl
        type="search"
        placeholder="Search What You Want....."
        aria-label="Search"
        className="custom-input"
      />
      
      <InputGroup.Text className="custom-icon">
        <IoSearch />
      </InputGroup.Text>
    </InputGroup>
  </Form>

  )
}
