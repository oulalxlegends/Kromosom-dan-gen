import React from "react";
import "../ComponentStyle/HomeStyle.css";
import profil from "../Asset/profil.jpg"

const Info =()=> {
    return (
        <div className="ScreenContainer">
            <div className="Profil" >
                <h1>Profil Pengembang</h1>
                <p>Nama  : Bima Praditya Daneshwara</p>
                <p>NIM   : 21105244023</p>
                <p>Prodi : Teknologi Pendidikan B 2021</p>
            </div>
            <div className="Credit">
                <h1>Sumber</h1>
                <h3 className="contoh">Interaksi Link</h3>
                <p>https://id.wikipedia.org/wiki/Kromosom </p>
                <p>https://id.wikipedia.org/wiki/Gen </p>

                <h3 className="contoh">Gambar</h3>
                <p>Shutterstock.com</p>
                <p>Freepik.com</p>

                <h3 className="contoh">Video</h3>
                <p>https://youtu.be/W-8BBHkVl8Y</p>
                <p>https://youtu.be/pRLzqHAWTcs</p>

                <h3 className="contoh">Audio</h3>
                <p>https://youtu.be/Py3_VP_-iMc </p>
            </div>

        </div>
    )
}

export default Info