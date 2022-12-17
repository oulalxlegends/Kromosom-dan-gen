import React from "react";
import "../ComponentStyle/ModalStyle.css";
import Xicon from "../Asset/XIcon.svg";
import setek from "../Asset/setek.PNG";
import Gambar1 from "../Asset/gambar1.jpg";
import Gambar2 from "../Asset/gambar2.jpg";

const FinitiveModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Kromosom</h1>
                
                <img src={Gambar1} />
                <img src={Gambar2} />
                <p>Berperan dalam proses pembelahan sel dan memastikan masing-masing sel yang telah membelah mendapatkan gen yang sama.</p>
                <p>Terdapat di dalam nukleus berupa benda-benda halus berbentuk lurus atau bengkok.</p>
                <p>Fungsi utamanya adalah untuk menyimpan materi genetik. Materi genetik inilah yang akan menentukan sifat dan kekhasan setiap individu..</p>
                <p>Menentukan jenis kelamin.</p>
                <p>Berperan penting dalam proses transkripsi DNA untuk melakukan sintesis protein.</p>
                <p>Bagian-bagian dari kromosom sebagai berikut:</p>
                <li>Lengan adalah badan kromosom yang berisi kromonema, yaitu benang-benang kromosom yang dikelilingi oleh matriks. Bagian ini berwarna lebih gelap karena menyerap zat warna.</li>
                <li>Matriks merupakan cairan bening , mengisi seluruh lengan kromosom.</li>
                <li>Sentromer atau kinetokor adalah pusat kromosom yang membagi kromosom menjadi dua lengan. Bagian ini berwarna lebih terang karena kurang menyerap zat warna.</li>
                <li>Kromomer adalah bagian dari kromonema yang mengalami penebalan. Di dalamnya, terdapat lokusyang menjadi tempat kedudukan gen.</li>
                <li>Telomer adalah bagian ujung kromosom dengan fungsi untuk menghalangi terjadinya pelekatan antarkromosom serta menjaga agar DNA di dalamnya tidak mudah terurai.</li>
                <li>Satelit adalah ujung kromosom yang mengalami konstriksi sekunder.</li>

                <p>Macam-macam tipe kromosom sebagai berikut:</p>
                <li>Metasentrik yaitu sentromer terletak di tengah, sehingga membagi lengan kromosom menjadi sama panjang. Dapat digambarkan seperti huruf V.</li>
                <li>Sub metasentrik yaitu letak sentromer agak ke tengah. Dapat di gambarkan seperti huruf L.</li>
                <li>Akrosentrik yaitu letak sentromer agak ke ujung. Sehingga dapat digambarkan seperti huruf J.</li>
                <li>Telosentrik yaitu letak sentromer terdapat di ujung lengan.</li>
            </div>
        </div>
    )
}

export default FinitiveModal