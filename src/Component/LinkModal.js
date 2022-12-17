import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import gambar4 from "../Asset/gambar4.jpg";

const LinkModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>DNA</h1>
                <img src={gambar4} />
                <p>DNA Berfungsi Sebagai Pembawa Informasi Genetik Sifat pada materi DNA yang unik membuat peneliti tertarik untuk lebih lanjut lagi mempelajari tentang DNA. Hasilnya DNA dapat digunakan untuk membantu mengidentifikasi sebuah kasus pembunuhan, hingga kasus kematian seseorang yang tidak diketahui identitasnya. DNA juga membantu kinerja penegak hukum, karena dapat mengenali atau mengetahui informasi terkait siapakah pelaku atau siapakah korban melalui tes DNA.</p>
                <p>DNA Berfungsi Sebagai Pembawa Informasi Genetik Sifat pada materi DNA yang unik membuat peneliti tertarik untuk lebih lanjut lagi mempelajari tentang DNA. Hasilnya DNA dapat digunakan untuk membantu mengidentifikasi sebuah kasus pembunuhan, hingga kasus kematian seseorang yang tidak diketahui identitasnya. DNA juga membantu kinerja penegak hukum, karena dapat mengenali atau mengetahui informasi terkait siapakah pelaku atau siapakah korban melalui tes DNA.</p>
                <p>Berperan dalam Duplikasi Diri dan Pewarisan Sifat DNA dibundel ke dalam 46 kromosom. Manusia memiliki 23 masing-masing berasal dari laki-laki dan sel germinal perempuan. Hal ini dapat terjadi melalui proses yang kompleks. Lebih jelasnya sel-sel germinal, spermatozoa dari pria dan sel telur atau ovum dari perempuan masing-masing memasok setengah DNA kamu. Hal inilah yang membuat DNA berperan dalam duplikasi diri dan pewarisan sifat.</p>
                <p>Ekspresi Informasi Genetik DNA adalah dasar dari kehidupan. Ini adalah molekul kompleks yang terdiri dari empat jenis basa, silang terhubung seperti tangga, dan di pelintir menjadi spiral. Semua empat protein masing-masing terhubung dengan satu dan yang lainnya. Dan urutan semua pasangan membentuk gen yang mendefinisikan siapa kamu serta semua organisme lain di bumi. DNA juga mengandung semua pengkodean genetik yang digunakan untuk mengontrol fungsi, perilaku dan pengembangan suatu organisme.</p>

            </div>
        </div>
    )
}

export default LinkModal