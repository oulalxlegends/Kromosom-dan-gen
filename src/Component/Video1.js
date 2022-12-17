import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.png";
import ArrowRight from "../Asset/ArrowRight.png";

const Video1 =({play})=> {
 return (
   <div className="ScreenContainer">
    <h2>Quiz</h2>
      <div className="IntroContainer">
          <p>Pilih dan tekan tombol dibawah untuk memulai dan mengerjakan Quiz</p>
          <button className="buttonQuiz"><a className="linkquiz" href="https://quizizz.com/admin/quiz/5f45ed5fb73635001b238d40/soal-tentang-kromosom-xii-ipa-1" target="_blank">Mulai Quiz Kromosom</a></button>
          <button className="buttonQuiz"><a className="linkquiz" href="https://quizizz.com/admin/quiz/5f7aa653a0725d001b83abaf/kuis-gen " target="_blank">Mulai Quiz Gen</a></button>
      </div>
      <div className="ArrowContainer">
      <Link className="Link" to="/Screen6">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
      </div>
    </div>
 )
}


export default Video1