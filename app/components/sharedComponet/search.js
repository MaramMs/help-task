'use client'
import React from 'react'
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { IoSearch } from "react-icons/io5"; 
import '../../styles/home.css'
export default function Search() {
    const handleSearch = (event) => {
        event.preventDefault();
        // Add your search logic here
        // console.log("Search triggered");
      };
  return (
<Form className="rounded-[25px] py-[8px] px-[24px] lg:w-[344px] flex items-center gap-[79px] border border-[#4E547133]">
  <input 
    className="w-full border-none outline-none bg-transparent" 
    placeholder="Search what you want....." 
  />
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7567 14.5735L11.8125 10.6129C12.8266 9.44901 13.3823 7.98455 13.3823 6.45999C13.3823 2.89801 10.3806 0 6.69113 0C3.0017 0 0 2.89801 0 6.45999C0 10.022 3.0017 12.92 6.69113 12.92C8.07619 12.92 9.39609 12.5167 10.5246 11.751L14.4988 15.7416C14.6649 15.9082 14.8883 16 15.1278 16C15.3544 16 15.5694 15.9166 15.7326 15.7649C16.0794 15.4428 16.0904 14.9085 15.7567 14.5735ZM6.69113 1.68522C9.4182 1.68522 11.6367 3.82713 11.6367 6.45999C11.6367 9.09286 9.4182 11.2348 6.69113 11.2348C3.96406 11.2348 1.74551 9.09286 1.74551 6.45999C1.74551 3.82713 3.96406 1.68522 6.69113 1.68522Z" fill="#4E5471"/>
</svg>

</Form>


  )
}
