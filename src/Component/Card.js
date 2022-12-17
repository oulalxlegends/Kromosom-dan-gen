import React, {useState} from "react";
import "../ComponentStyle/CardStyle.css";
import ArrowLeft from "../Asset/ArrowLeft.png";
import { Link } from "react-router-dom";
import ArrowRight from "../Asset/ArrowRight.png";

import FinitiveModal from "./FinitiveModal";
import AuxModal from "./AuxModal";
import LinkModal from "./LinkModal";
import TransModal from "./TransModal";
import RegModal from "./RegModal";
import kromosom from "../Asset/kromosom.png";
import gen from "../Asset/gen.png";
import dna from "../Asset/dna.png";
import rna from "../Asset/rna.png";





const Card =({play})=> {
    const [openFinitiveModal, setOpenFinitiveModal] = useState(false)
    const [openAuxModal, setOpenAuxModal] = useState(false)
    const [openLinkingModal, setOpenLinkingModal] = useState(false)
    const [openTransModal, setOpenTransModal] = useState(false)
    const [openRegModal, setOpenRegModal] = useState(false)

    return(
        <div className="CardContainer">
            <div className="cardTittle">
                <h2>Materi</h2>
            </div>
            <div className="ListContainer">
                <button onClick={() => setOpenFinitiveModal(true)}>
                    <img className="iconmateri" src={kromosom} />
                    <h1>Kromosom</h1>
                </button>
                <button onClick={() => setOpenAuxModal(true)}>
                    <img className="iconmateri" src={gen} />
                    <h1>Gen</h1>
                </button>
                <button onClick={() => setOpenLinkingModal(true)}>
                    <img className="iconmateri" src={rna} />
                    <h1>DNA</h1>
                </button>
                <button onClick={() => setOpenTransModal(true)}>
                    <img className="iconmateri" src={dna} />
                    <h1>RNA</h1>
                </button>
            </div>
            <div className="ArrowContainer">
                <Link className="Link" to="/Screen3">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Video">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>     
            <FinitiveModal open={openFinitiveModal} onClose={()=> setOpenFinitiveModal(false)} />
            <AuxModal open={openAuxModal} onClose={()=> setOpenAuxModal(false)} />
            <LinkModal open={openLinkingModal} onClose={()=> setOpenLinkingModal(false)} />
            <TransModal open={openTransModal} onClose={()=> setOpenTransModal(false)} />
            <RegModal open={openRegModal} onClose={()=> setOpenRegModal(false)} />
        </div>

    )
}

export default Card;