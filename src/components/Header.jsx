import React from "react"
import Component from "./Component"
import Reserving from "./Reserving"

export default function Header () {
    return (
        <div>
            <div className="header">
                <ul>
                    <li><a>Home</a></li>
                </ul>
                <ul>
                    <Component/>
                </ul>               
                <ul>
                    <li><a>Rezerwacje</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <div className="main">
                <div className="content">
                    <img src="https://www.insure4sport.co.uk/blog/wp-content/uploads/sites/9/2021/11/football-training-equipment-1-1024x683.jpg" alt="Boisko"/>
                    <div className="text-overlay">
                        <p>Wynajmij boisko, sprzęt piłarski , a nawet trening z profesjonalnym trenerem </p>
                    </div>
                    
                </div>              
                <h3 className="reserve-button"><Reserving/></h3>         
            </div>
        </div>
    )
}