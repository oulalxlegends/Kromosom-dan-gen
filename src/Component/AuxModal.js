import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import cangkok from "../Asset/cangkok.PNG";
import gen1 from "../Asset/gen1.png";

const AuxModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Gen</h1>
                <img src={gen1} />
                <p>Terdapat dalam setiap lokus yang khas pada kromosom.</p>
                <p>Merupakan substansi genetik terkecil yang terdiri atas sepenggal DNA yang membawa dan menentukan sifat individu melalui pembentukan polipeptida</p>
                <p>Merupakan unil terkecil materi genetik</p>
                <p>Berperan penting dalam mengontrol sifat-sifat individu yang diturunkan</p>
                <p>Sifat sifat gen antara lain:</p>
                <li>Mengandung informasi genetic</li>
                <li>Dapat berduplikasi diri</li>
                <li>Terdapat di dalam lokus kromosom</li>
                <li>Berupa zarah yang stabil di dalam kromosom</li>

                <p>Fungsi gen antara lain:</p>
                <li>Mengatur metabolisme</li>
                <li>Mengatur pewarisan sifat</li>

                <p>Gen terletak di dalam kromosom, tepatnya pada bagian yang disebut kromomer atau nukleosom.</p>
                <p>Terdapat tiga macam komponen penyusun gen, yaitu Sistron (komponen yang terdiri atas ratusan nukleotida), Rekon (komponen yang lebih kecil dari gen dan terdiri atas satu atau dua pasang nukleotida), Muton (komponen yang lebih besar dari rekon dan terdiri atas satu atau dua pasang nukleotid). </p>

                <p>Ada dua hal yang menentukan tipe-tipe gen, yaitu sifat dan perannya.</p>
                <p>Ada beberapa contoh Gen yaitu </p>
                <li>Warna rambut</li>
                <li>Warna kulit</li>
                <li>Bentuk hidung</li>
                <li>Jenis rambut</li>
                <li>Warna mata</li>
                <li>Bentuk wajah</li>
                <li>Tinggi badan</li>
            </div>
        </div>
    )
}

export default AuxModal