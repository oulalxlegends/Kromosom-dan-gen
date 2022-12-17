import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import gambar5 from "../Asset/gambar5.jpg";

const TransModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>RNA</h1>
                <img src={gambar5} />
                <p>RNA atau ribonucleic acid. Adalah makromolekul polinukleotida berupa rantai tunggal atau ganda yang tidak berpilin. Rantai pada RNA juga pendek-pendek, karena dibentuk melalui transkripsi fragmen-fragmen DNA. RNA banyak ditemukan di sitoplasma atau ribosom. Berbeda dengan DNA, keberadaan RNA di dalam sel tidak tetap karena mudah terurai dan harus dibentuk kembali. RNA tersusun dari banyak ribonukleotida, di mana setiap ribonukleotida terdiri atas 3 komponen, yaitu fosfat, gula ribosa, dan basa nitrogen.</p>
                <p>Basa nitrogen RNA terdiri atas basa purin, yaitu adenin (A) dan guanin (G) serta basa pirimidin, yaitu urasil (U) dan sitosin (S). Keempat basa nitrogen tersebut akan membentuk pasangan A – U dan G – S. Adenin dan urasil  dihubungkan oleh 2 ikatan hidrogen, sedangkan guanin dan sitosin dihubungkan oleh 3 ikatan hidrogen. RNA dapat dibagi menjadi dua tipe, yaitu RNA genetik dan RNA nongenetik. RNA genetik adalah RNA yang berperan dalam pewarisan sifat. </p>

            </div>
        </div>
    )
}

export default TransModal