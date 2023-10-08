import Component from "../components/Component"
import React ,{useState} from "react"
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Content from "../components/Content";

export default function Contact() {
       
    
  return (
    <div>
      <Header/>
      <Content/>
    </div>
    )
}