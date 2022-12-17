import React from "react";

import ArrowLeft from "../Asset/ArrowLeft.png"
import ArrowRight from "../Asset/ArrowRight.png";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import gif3 from "../Asset/gif3.json";
import Lottie from "lottie-react"


const Screen3 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <h2>Pengertian Umum</h2>
                
                <div className="IntroContainer">
                <Lottie className="gif3" animationData={gif3} />
                    
                    <p>Secara umum gen adalah unit terkecil suatu materi yang menentukan sifat keturunan. DNA adalah asam nukleat yang tersusun atas nukleotid. Kromosom adalah pembawa materi genetik yang ada di inti sel.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen3;