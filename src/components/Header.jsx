import React from "react";
import Component from "./Component";
import Reserving from "./Reserving";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">Home</Link>
              </li>
              <li><Link to="/List" className="nav-link " aria-current="page">Oferta</Link></li>           
              <li><Link to="/DataSave" className="nav-link " aria-current="page">Twoje Rezerwacje</Link></li>         
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
