import React, {useState} from "react";
import "../ComponentStyle/BgStyle.css";
import ornamen from "../Asset/Ornamen.png"
import lampu from "../Asset/lampu.png";
import bg1 from "../Asset/bg1.png";

const Background =()=> {
    

    return(
        <div className="bgContainer">
            <img src={bg1} /> 
            <img src={bg1} /> 
        </div>
    )
}

export default Background





