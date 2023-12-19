import Header from "../components/Header";
import ReservationContent from "../components/ReservationContent";
import React ,{useState} from "react"
import { Outlet, Link } from "react-router-dom";


export default function Contact() {
       
    
  return (
    <div>
      <Header/>
      <ReservationContent/>
    </div>
    )
}