import React from "react"
import Component from "./Component"
import Reserving from "./Reserving"

export default function Header () {
    return (
        <div>
            <div className="header">
                <p>Kontakt</p>
                <h3><Component/></h3>                
                <p>Rezerwacje</p>
            </div>
            <div className="main">
                <div className="content">
                    <img src="https://www.insure4sport.co.uk/blog/wp-content/uploads/sites/9/2021/11/football-training-equipment-1-1024x683.jpg" alt="Boisko"/>
                    <div className="text-overlay">
                        <p>Wynajmij boisko, sprzęt piłarski , a nawet trening z profesjonalnym trenerem </p>
                    </div>
                    
                </div>
                <h3><Reserving/></h3>
            </div>
        </div>
    )
}