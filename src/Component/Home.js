import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css"
import plays from "../Asset/play.png";
import info from "../Asset/InfoButton.png";
import tittle from "../Asset/Tittle.png";
import ask from "../Asset/icon.png";
import homehead from "../Asset/homehead.png";


const Home =({play, playMusic, setOpenNav})=>{

    return  (
        <div className="homePage">
            <img className="head" src={homehead} />

            <div className="tittle">
                <img alt="tittle" src={tittle}/>
            </div>
            <div className="buttonContainer">
                <div className="MainButtonContainer">
                    <Link onClick={()=> setOpenNav(true) } className="Link" to="/Screen2">
                        <img alt="play" onClick={playMusic} src={plays} />
                    </Link>
                </div>
            </div>
            <div className="SecondButtonContainer">
                    <Link onClick={()=> setOpenNav(true)} className="Link" to="/info">
                        <img alt="info" onClick={playMusic} src={info} />
                    </Link>
                    <Link onClickCapture={()=> setOpenNav(true)} to="/about">
                    <img alt="ask" src={ask} />
                    </Link>
                    
                </div>
            
        </div>
        
    )

}
export default Home;